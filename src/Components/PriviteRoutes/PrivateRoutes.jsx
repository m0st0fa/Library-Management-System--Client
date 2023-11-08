/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location = useLocation()
    // console.log(location)

    if(loading){
        return  <span className="loading loading-infinity loading-lg"></span>
       }
       if(user){
        return children
       }
    return  <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;