import { Navigate, Outlet } from "react-router-dom";


const authProvider = () => {
    const token = sessionStorage.getItem("token");
    
    return token ? <Outlet /> : <Navigate to={"/auth/login"} replace />
}

export default authProvider
