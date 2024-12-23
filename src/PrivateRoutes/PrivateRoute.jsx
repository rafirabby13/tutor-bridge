/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import Loading from "../components/Loading.jsx";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    if (loading) {
        return <Loading/>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;