import Navbar from "../compoents/Navbar";
import { Outlet } from "react-router-dom";
import StickyBar from "../compoents/StickyBar";
import Footer from "../compoents/Footer";
import Copyright from "../compoents/Copyright";

const MainLayout = () => {
  return (
    <>
      <StickyBar />
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default MainLayout;
