import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/layout/RootLayout";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ResumePage from "@/pages/ResumePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
