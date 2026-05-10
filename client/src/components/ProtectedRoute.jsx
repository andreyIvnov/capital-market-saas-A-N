import { Navigate } from "react-router-dom";
import { fbAuth } from "../firebase";

function ProtectedRoute({children}) {
    const user = fbAuth.currentUser;

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;