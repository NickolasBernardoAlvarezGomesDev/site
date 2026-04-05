import { useEffect } from "react";
import { Outlet, ScrollRestoration, createBrowserRouter, useLocation } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HomePage } from "@/pages/Home";
import { ProjectsPage } from "@/pages/Projects";
import { ProjectDetailPage } from "@/pages/ProjectDetail";
import { AboutPage } from "@/pages/About";
import { ContactPage } from "@/pages/Contact";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function RootLayout() {
  return (
    <div className="page-shell">
      <Navbar />
      <ScrollRestoration />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projetos", element: <ProjectsPage /> },
      { path: "projetos/:slug", element: <ProjectDetailPage /> },
      { path: "sobre", element: <AboutPage /> },
      { path: "contato", element: <ContactPage /> }
    ]
  }
]);
