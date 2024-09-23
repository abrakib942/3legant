import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
