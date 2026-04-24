import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restaura o scroll para o topo a cada mudança de rota.
 * Garante que links internos (ex.: "como funciona o processo")
 * sempre cheguem no topo da página de destino, sem herdar a
 * posição de scroll da página anterior.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};
