import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/empresas")({
  component: EmpresasLayout,
});

function EmpresasLayout() {
  return <Outlet />;
}
