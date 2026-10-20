import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
