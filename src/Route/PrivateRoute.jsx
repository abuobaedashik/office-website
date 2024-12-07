import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Components/Provider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(Authcontext)
    const location =useLocation()
    console.log(location);
    if (loading) {
        return <div>Loading</div>
    }
    if (user && user?.email ) {
     return children
   } return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;