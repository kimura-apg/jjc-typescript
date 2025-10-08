import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$username")({
  component: RouteComponent,
});

function RouteComponent() {
  const param = Route.useParams();

  return <div>Hello {param.username}!</div>;
}
