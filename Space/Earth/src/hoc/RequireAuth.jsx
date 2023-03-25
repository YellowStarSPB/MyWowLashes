import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

function RequireAuth({ children }) {
    const location = useLocation();
    const { admin } = useAuth();

    if (admin.login !== 'Oleg' && admin.password !== '1234') {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children
}

export default RequireAuth;