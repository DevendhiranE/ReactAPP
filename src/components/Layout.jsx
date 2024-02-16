// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPage";
// import HomePage from "../pages/HomePage";
import TheNavBar from "./TheNavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <TheNavBar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
