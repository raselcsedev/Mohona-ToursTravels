import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../component/Home/Navbar";

const Root = () => {
  return (
    <div className="font-bodyFont">
      <Navbar />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default Root;
