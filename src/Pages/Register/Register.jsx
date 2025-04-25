import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/Firebase.init.js";
import { Link, useNavigate } from "react-router-dom";
import a1 from "../../assets/Animation - 1735202464545.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
const Register = () => {
  const { registerUser, googleLogin, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password, photo, name);

    registerUser(email, password)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("updated");
            toast.success("Registered Successfully");

            navigate(location?.state ? location.state : "/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Registered Successfully");
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <Helmet>
        <title>Register | Tutor Bridge</title>
      </Helmet>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-4 md:px-0">
        {/* Animation */}
        <div className="w-full lg:w-1/2 text-center">
          <Lottie
            animationData={a1}
            loop
            className="w-full max-w-md mx-auto h-[300px] md:h-[500px]"
          />
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Photo URL</label>
              <input
                name="photo"
                type="url"
                placeholder="https://example.com/photo.jpg"
                required
                className="input input-bordered w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#254336] text-white font-semibold rounded-lg hover:bg-[#1e362a] transition-colors"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#254336] hover:underline font-medium">
              Login
            </Link>
          </div>

          <div className="divider my-6">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3  bg-white border border-gray-300 rounded-lg hover:bg-gray-200 transition"
          >
            <FaGoogle className="text-xl text-red-500" />
            <span className="font-medium text-gray-700">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
