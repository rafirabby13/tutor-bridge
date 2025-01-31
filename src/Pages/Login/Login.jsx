/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import a1 from "../../assets/Animation - 1735202385033.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successfully");

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successfully");
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero feedback  overflow-x-hidden py-20">
      <Helmet>
        <title>Login | Tutor Bridge</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            className="h-[200px] md:h-[600px]"
            animationData={a1}
            loop={true}
          />
        </div>
        <div className="card form  w-full max-w-md shrink-0 shadow-2xl  shadow-[#331D2C]">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-xl md:text-4xl font-bold text-center underline">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered "
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <p className="md:text-2xl py-4">
                Don't have an account?{" "}
                <Link className="underline font-semibold" to="/register">
                  Register
                </Link>
              </p>
            </div>
            <div className="form-control mt-6 login">
              <button className="p-2 md:p-4 bg-[#254336] text-white md:text-xl ">
                Login
              </button>
            </div>
          </form>
          <div className="divider divider-[#254336]">OR</div>
          <div onClick={handleGoogleLogin} className="form-control mt-6 login">
            <button className="p-2 md:p-4 px-10 bg-[#254336] text-white md:text-xl flex items-center justify-center gap-4 mb-10 w-fit mx-auto">
              <FaGoogle /> Sign In With Google
            </button>
          </div>
          {/* <div className="text-center w-full">
            <button
              className="border-2 w-3/4 p-2 md:p-4 mb-10  md:text-2xl font-semibold rounded-lg bg-[#254336] shadow-red-400 shadow-sm text-white"
              onClick={handleGoogleLogin}
            >
              Sign In With Google
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
