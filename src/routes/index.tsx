import { createFileRoute } from "@tanstack/react-router";
import landingHtml from "../landing.html?raw";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cognitiva | Engenharia de Transposição Didática" },
      {
        name: "description",
        content:
          "Engenharia de Transposição Didática focada no fortalecimento de indicadores de acessibilidade.",
      },
    ],
  }),
});

function Index() {
  return (
    <iframe
      title="Cognitiva"
      srcDoc={landingHtml}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
