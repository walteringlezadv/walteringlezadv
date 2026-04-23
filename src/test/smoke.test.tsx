import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";
import { INSTITUTIONAL_LABELS } from "@/lib/routes";

/**
 * Smoke test mínimo de estabilização (Fase 0/1).
 *
 * Garante que:
 *  - a rota principal renderiza sem lançar,
 *  - o shell + header institucional estão presentes,
 *  - os rótulos públicos PT-BR canônicos continuam intactos.
 *
 * Não valida layout nem conteúdo de marketing — escopo deliberadamente estreito.
 */
describe("smoke: main route", () => {
  it("renders Index inside the site shell without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Index />
      </MemoryRouter>,
    );

    // H1 da home — herdado da landing institucional validada (Fase 2).
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /você tem certeza do que está assinando\?/i,
      }),
    ).toBeInTheDocument();
  });

  it("preserves canonical PT-BR institutional labels", () => {
    // Proteção semântica: estes rótulos NÃO podem mudar sem decisão explícita.
    expect(INSTITUTIONAL_LABELS.menuProximoPasso).toBe("Próximo Passo");
    expect(INSTITUTIONAL_LABELS.pageTitleProximoPasso).toBe(
      "Avaliação de Aderência e Próximo Passo",
    );
    expect(INSTITUTIONAL_LABELS.ctaSolicitarTriagem).toBe("Solicitar triagem");
  });
});
