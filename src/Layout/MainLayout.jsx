/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="mx-20 " >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
