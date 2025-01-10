import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logoutUser, theme, setTheme } = useContext(AuthContext);
  // console.log(user);

  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#6B8A7A] font-bold text-[#F6F4F0] lg:text-lg"
              : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#6B8A7A] font-bold text-[#F6F4F0] lg:text-lg"
              : "font-bold"
          }
          to="/find-tutors"
        >
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#6B8A7A] font-bold text-[#F6F4F0] lg:text-lg"
              : "font-bold"
          }
          to="/addTutorials"
        >
          Add Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#6B8A7A] font-bold text-[#F6F4F0] lg:text-lg"
              : "font-bold"
          }
          to="/myTutorials"
        >
          My Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#6B8A7A] font-bold text-[#F6F4F0] lg:text-lg"
              : "font-bold"
          }
          to="/myBookedTutor"
        >
          My booked Tutors
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Succeed",
          text: "Logged out ..ooohhhhooooo..",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleTheme = () => {
    setTheme((current) => (current == "light" ? "dark" : "light"));
  };

  return (
    <div className=" navbar2 fixed top-0 right-0 left-0 z-30 backdrop-blur-sm ">
      <div className="navbar items-center xl:px-20 lg:py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-[#F6F4F0] bg-green-950 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <a className=" hidden lg:flex text-3xl xl:text-4xl font-extrabold">
            TutorBridge
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold flex items-center  xl:text-xl px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4  ">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-variant="dark"
                className="xl:h-16 xl:w-16 h-10 w-10  rounded-full p-1 lg:p-0 xl:p-1 border-2 lg:border-[6px] z-20 border-[#6B8A7A]"
                src={user?.photoURL}
                alt=""
              />
              <Tooltip id="my-tooltip" className="z-50" />

              <Link
                onClick={handleLogout}
                className=" border-none p-1 lg:text-xl xl:btn text-sm bg-[#6B8A7A] xl:bg-[#6B8A7A] text-[#F6F4F0] xl:text-[#F6F4F0]"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex gap-1">
              <Link
                to="/login"
                className=" border-none p-1 lg:text-xl md:btn text-sm bg-[#6B8A7A] md:bg-[#6B8A7A] text-[#F6F4F0] md:text-[#F6F4F0]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className=" border-none p-1 lg:text-xl md:btn text-sm bg-[#6B8A7A] md:bg-[#6B8A7A] text-[#F6F4F0] md:text-[#F6F4F0] "
              >
                Register
              </Link>
            </div>
          )}
          <div
            className="text-2xl text-[#6B8A7A] lg:text-6xl p-2"
            onClick={handleTheme}
          >
            {theme !== "light" ? <FaToggleOn /> : <FaToggleOff />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
