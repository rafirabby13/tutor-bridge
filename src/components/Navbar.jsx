import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  // console.log(user);

  const items = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/find-tutors">Find Tutors</NavLink>
      </li>
      <li>
        <NavLink to='/addTutorials'>Add Tutorials</NavLink>
      </li>
      <li>
        <NavLink>My Tutorials</NavLink>
      </li>
      <li>
        <NavLink to='/myBookedTutor'>My booked Tutors</NavLink>
      </li>
    </>
  );



  const handleLogout=()=>{
    logoutUser()
    .then(()=>{
      alert('success');
    })
    .catch(err=>{
      console.log(err.message);
    })


  }


  return (
    <div>
      <div className="navbar bg-base-100">
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
          <a className="btn btn-ghost text-xl">TutorBridge</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={handleLogout} className="btn">Logout</Link>
          ) : (
            <div>
              <Link to='/login' className="btn">Login</Link>
              <Link to='/register' className="btn">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
