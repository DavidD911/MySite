import { Outlet, ScrollRestoration } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
