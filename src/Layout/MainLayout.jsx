/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  const { theme, setTheme } = useContext(AuthContext);

  return (
    <div id={theme}>
      <section className="xl:mx-7">
        <Navbar />
      </section>
      <section className="lg:mx-20 ">
        <Outlet />
      </section>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </div>
  );
};

export default MainLayout;
