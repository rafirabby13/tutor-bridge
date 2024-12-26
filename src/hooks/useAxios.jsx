import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://online-tutor-booking-platform-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
    const {logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(err);
        if (err.status === 401 || err.status === 403) {
          console.log("need to log out user");
          logoutUser()
          .then(() => {
            console.log("success");
            navigate('/login')
          })
          .catch((err) => {
            console.log(err.message);
          });
        }
        return Promise.reject(err);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxios;
