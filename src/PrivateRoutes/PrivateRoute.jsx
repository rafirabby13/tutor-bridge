/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import Loading from "../components/Loading.jsx";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    // const navigte = useNavigate()
  const location = useLocation()
  console.log(location);
    const {loading, user} = useContext(AuthContext)
    if (loading) {
        return <Loading/>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;