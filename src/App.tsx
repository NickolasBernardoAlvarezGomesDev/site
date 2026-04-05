import { RouterProvider } from "react-router-dom";
import { router } from "@/router";

export default function App() {
  return (
    <div className="app-shell">
      <RouterProvider router={router} />
    </div>
  );
}
