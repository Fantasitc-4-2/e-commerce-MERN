import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// ✅ Restrict access based on user state
export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  // if not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // if logged in, show protected page
  return children;
}
