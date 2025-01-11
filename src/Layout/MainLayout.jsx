/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/Banner.jsx";
const MainLayout = () => {
  const { theme, setTheme } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div id={theme}>
      <section>
        <Navbar />
      </section>
      <section className="h-16 lg:h-[156px]"></section>
      {location.pathname == "/" ? (
        <section className="mb-28">
          <Banner></Banner>
        </section>
      ) : (
        ""
      )}

      <section className="md:max-w-[85%] mx-auto space-y-28">
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
