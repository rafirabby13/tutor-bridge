/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider.jsx";
import a1 from '../../assets/Animation - 1735202385033.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Login = () => {


    const {loginUser} = useContext(AuthContext)


    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <div className="hero feedback min-h-screen overflow-x-hidden">
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
            <h1 className="text-xl md:text-4xl font-bold text-center underline">Login</h1>
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
              <button className="p-2 md:p-4 bg-[#331D2C] text-white md:text-xl ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
