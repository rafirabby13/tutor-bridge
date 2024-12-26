import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  // console.log(user);

  const items = (
    <>
      <li>
        <NavLink to="/" className={`({ isActive }) =>
          isActive
            ? "text-black bg-none"
            : "text-gray-700"`}>Home</NavLink>
      </li>
      <li>
        <NavLink className={`({ isActive }) =>
          isActive
            ? "text-black bg-none"
            : "text-gray-700"`}  to="/find-tutors">Find Tutors</NavLink>
      </li>
      <li>
        <NavLink className={`({ isActive }) =>
          isActive
            ? "text-black bg-none"
            : "text-gray-700"`}  to="/addTutorials">Add Tutorials</NavLink>
      </li>
      <li>
        <NavLink className={`({ isActive }) =>
          isActive
            ? "text-black bg-none"
            : "text-gray-700"`}  to="/myTutorials">My Tutorials</NavLink>
      </li>
      <li>
        <NavLink className={`({ isActive }) =>
          isActive
            ? "text-black bg-none"
            : "text-gray-700"`}  to="/myBookedTutor">My booked Tutors</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <a className=" text-4xl font-extrabold">TutorBridge</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <img 
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-variant="dark"
                className="h-16 w-16 rounded-full p-1 border-[6px] z-20"
                src={user?.photoURL}
                alt=""
              />
              <Tooltip id="my-tooltip" className="z-50"/>

              <Link onClick={handleLogout} className="btn bg-[#1B4242] text-[#E2DFD0]">
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login" className="btn bg-[#481E14]">
                Login
              </Link>
              <Link to="/register" className="btn bg-[#481E14] ">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
