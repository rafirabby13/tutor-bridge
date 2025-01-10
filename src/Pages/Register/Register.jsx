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
    <div className="hero feedback min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Register | Tutor Bridge</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            className="h-[200px] md:h-[600px]"
            animationData={a1}
            loop={true}
          />
        </div>
        <div className="card form w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <h1 className="md:text-4xl font-bold text-center underline">
              Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <p className="md:text-2xl py-4">
              Already have an account?{" "}
              <Link className="underline font-semibold" to="/login">
                Login
              </Link>
            </p>
            <div className="form-control mt-6 login">
              <button className="p-2 md:p-4 bg-[#254336] text-white text-xl ">
                Register
              </button>
            </div>
          </form>
          <div className="divider ">OR</div>
          <div onClick={handleGoogleLogin} className="form-control mt-6 login">
            <button className="p-2 md:p-4 px-10 bg-[#254336] text-white md:text-xl flex items-center justify-center gap-4 mb-10 w-fit mx-auto">
              <FaGoogle /> Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
