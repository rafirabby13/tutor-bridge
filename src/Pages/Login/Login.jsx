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
    // console.log(email, password);
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
        // console.log(res.user);
        toast.success("Login Successfully");
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    
    <div className="hero min-h-screen py-10 bg-gradient-to-br from-white to-gray-100 overflow-x-hidden">
  <Helmet>
    <title>Login | Tutor Bridge</title>
  </Helmet>

  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className="w-full lg:w-1/2">
      <Lottie
        className="h-[250px] md:h-[500px]"
        animationData={a1}
        loop={true}
      />
    </div>

    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10">
      <form onSubmit={handleLogin}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Login
        </h1>

        <div className="space-y-4">
          <div className="form-control">
            <label className="label font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="text-sm text-center mt-2 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#254336] font-semibold hover:underline">
              Register
            </Link>
          </div>

          <div className="pt-4">
            <button className="w-full py-3 rounded-md bg-[#254336] hover:bg-[#1e362a] text-white font-semibold transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </form>

      <div className="divider my-6 text-sm text-gray-500">OR</div>

      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[#254336] hover:bg-[#1e362a] text-white font-semibold transition-all duration-300"
      >
        <FaGoogle className="text-lg" /> Sign In With Google
      </button>
    </div>
  </div>
</div>

  );
};

export default Login;
