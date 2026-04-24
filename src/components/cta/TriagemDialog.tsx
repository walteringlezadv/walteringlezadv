import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
} from "@/lib/contact";
import {
  EMPTY_TRIAGEM,
  buildTriagemMessage,
  type TriagemFormData,
} from "@/lib/triagemMessage";
import { cn } from "@/lib/utils";

/**
 * TriagemDialog — modal canônico de "Triagem Qualificada".
 *
 * Estrutura em 3 etapas (Identificação · Passivo · Situação atual).
 * Envio sem backend: gera mensagem formatada e abre WhatsApp (canal
 * primário) ou mailto (secundário) com tudo preenchido.
 *
 * Disponibilizado globalmente via TriagemDialogProvider — qualquer
 * CTA chama `useTriagemDialog().open()` para abrir.
 */

type Ctx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const TriagemDialogContext = createContext<Ctx | null>(null);

export const useTriagemDialog = () => {
  const ctx = useContext(TriagemDialogContext);
  if (!ctx) {
    throw new Error("useTriagemDialog deve ser usado dentro de TriagemDialogProvider");
  }
  return ctx;
};

export const TriagemDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo<Ctx>(
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      isOpen,
    }),
    [isOpen],
  );

  return (
    <TriagemDialogContext.Provider value={value}>
      {children}
      <TriagemDialog open={isOpen} onOpenChange={setIsOpen} />
    </TriagemDialogContext.Provider>
  );
};

const STEPS = [
  { n: 1, label: "Identificação" },
  { n: 2, label: "Passivo" },
  { n: 3, label: "Situação" },
] as const;

type TriagemDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

const TriagemDialog = ({ open, onOpenChange }: TriagemDialogProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<TriagemFormData>(EMPTY_TRIAGEM);
  const [copied, setCopied] = useState(false);

  const reset = useCallback(() => {
    setStep(1);
    setData(EMPTY_TRIAGEM);
    setCopied(false);
  }, []);

  const handleOpenChange = (v: boolean) => {
    if (!v) {
      // Mantém os dados ao reabrir? Não — reseta para evitar lixo entre sessões.
      reset();
    }
    onOpenChange(v);
  };

  const set = <K extends keyof TriagemFormData>(key: K, v: TriagemFormData[K]) =>
    setData((prev) => ({ ...prev, [key]: v }));

  const message = buildTriagemMessage(data);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailtoHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    "Triagem qualificada",
  )}&body=${encodeURIComponent(message)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silencioso — usuário pode copiar manualmente do texto exibido
    }
  };

  const canAdvance =
    step === 1
      ? data.razaoSocial.trim() && data.responsavel.trim() && data.whatsapp.trim()
      : step === 2
        ? data.tipoDivida.trim() && data.banco.trim() && data.valorPassivo.trim() && data.garantia
        : true;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Triagem Qualificada</DialogTitle>
          <DialogDescription>
            Envio das informações iniciais para avaliação técnica em até 48h úteis.
          </DialogDescription>
        </DialogHeader>

        {/* Stepper */}
        <ol className="mt-2 flex items-center gap-2" aria-label="Progresso da triagem">
          {STEPS.map((s, i) => {
            const active = step === s.n;
            const done = step > s.n;
            return (
              <li key={s.n} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                    active && "border-primary bg-primary text-primary-foreground",
                    done && "border-primary bg-primary/10 text-primary",
                    !active && !done && "border-border text-muted-foreground",
                  )}
                  aria-current={active ? "step" : undefined}
                >
                  {done ? <Check className="h-3.5 w-3.5" aria-hidden /> : s.n}
                </span>
                <span
                  className={cn(
                    "hidden text-xs sm:inline",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden className="ml-1 hidden h-px flex-1 bg-border sm:block" />
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-4 space-y-4">
          {step === 1 && (
            <>
              <Field label="Razão social / nome da empresa" htmlFor="t-razao" required>
                <Input
                  id="t-razao"
                  value={data.razaoSocial}
                  onChange={(e) => set("razaoSocial", e.target.value)}
                  autoComplete="organization"
                />
              </Field>
              <Field label="Nome do responsável" htmlFor="t-resp" required>
                <Input
                  id="t-resp"
                  value={data.responsavel}
                  onChange={(e) => set("responsavel", e.target.value)}
                  autoComplete="name"
                />
              </Field>
              <Field label="WhatsApp" htmlFor="t-wpp" required>
                <Input
                  id="t-wpp"
                  type="tel"
                  inputMode="tel"
                  placeholder="(11) 99999-9999"
                  value={data.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  autoComplete="tel"
                />
              </Field>
            </>
          )}

          {step === 2 && (
            <>
              <Field label="Tipo de dívida bancária" htmlFor="t-tipo" required>
                <Input
                  id="t-tipo"
                  placeholder="Ex.: capital de giro, CCB, antecipação de recebíveis…"
                  value={data.tipoDivida}
                  onChange={(e) => set("tipoDivida", e.target.value)}
                />
              </Field>
              <Field label="Banco envolvido" htmlFor="t-banco" required>
                <Input
                  id="t-banco"
                  value={data.banco}
                  onChange={(e) => set("banco", e.target.value)}
                />
              </Field>
              <Field label="Valor aproximado do passivo" htmlFor="t-valor" required>
                <Input
                  id="t-valor"
                  placeholder="Ex.: R$ 1.200.000"
                  value={data.valorPassivo}
                  onChange={(e) => set("valorPassivo", e.target.value)}
                />
              </Field>
              <FieldRadio
                label="Existe garantia?"
                name="garantia"
                value={data.garantia}
                options={["Sim", "Não", "Não sei"]}
                onChange={(v) => set("garantia", v as TriagemFormData["garantia"])}
                required
              />
            </>
          )}

          {step === 3 && (
            <>
              <FieldRadio
                label="O banco já fez proposta?"
                name="proposta"
                value={data.propostaBanco}
                options={["Sim", "Não"]}
                onChange={(v) => set("propostaBanco", v as TriagemFormData["propostaBanco"])}
              />
              <FieldRadio
                label="Há execução, cobrança ou bloqueio?"
                name="execucao"
                value={data.execucaoCobranca}
                options={["Sim", "Não", "Não sei"]}
                onChange={(v) =>
                  set("execucaoCobranca", v as TriagemFormData["execucaoCobranca"])
                }
              />
              <Field label="Breve descrição do caso" htmlFor="t-desc">
                <Textarea
                  id="t-desc"
                  rows={4}
                  value={data.descricao}
                  onChange={(e) => set("descricao", e.target.value)}
                />
              </Field>
            </>
          )}
        </div>

        {/* Navegação entre etapas */}
        {step < 3 && (
          <div className="mt-6 flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s))}
              disabled={step === 1}
            >
              Voltar
            </Button>
            <Button
              type="button"
              onClick={() => setStep((s) => ((s + 1) as 1 | 2 | 3))}
              disabled={!canAdvance}
            >
              Avançar
            </Button>
          </div>
        )}

        {/* Etapa final — envio */}
        {step === 3 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep(2)}
              >
                Voltar
              </Button>
            </div>

            <Button asChild size="lg" className="w-full">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Enviar triagem pelo WhatsApp
              </a>
            </Button>

            <div className="rounded-md border border-border/60 bg-secondary/30 p-4">
              <p className="text-xs text-muted-foreground">Ou envie por e-mail:</p>
              <a
                href={mailtoHref}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 decoration-primary/70 hover:decoration-primary"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Enviar por e-mail
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <code className="break-all rounded bg-background px-2 py-1 text-xs text-foreground">
                  {EMAIL_ADDRESS}
                </code>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  aria-label="Copiar e-mail"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden />
                      Copiar e-mail
                    </>
                  )}
                </Button>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground/80">
              Sem backend nesta etapa: a mensagem é montada localmente e
              enviada pelo seu próprio WhatsApp ou cliente de e-mail.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Field = ({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={htmlFor} className="text-sm">
      {label}
      {required && <span className="ml-1 text-primary">*</span>}
    </Label>
    {children}
  </div>
);

const FieldRadio = ({
  label,
  name,
  value,
  options,
  onChange,
  required,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <p className="text-sm font-medium text-foreground">
      {label}
      {required && <span className="ml-1 text-primary">*</span>}
    </p>
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex flex-wrap gap-4"
    >
      {options.map((opt) => {
        const id = `${name}-${opt}`;
        return (
          <div key={opt} className="flex items-center gap-2">
            <RadioGroupItem id={id} value={opt} />
            <Label htmlFor={id} className="text-sm font-normal">
              {opt}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  </div>
);
