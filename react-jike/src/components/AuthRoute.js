import { Navigate } from "react-router-dom";
const { getToken } = require("@/utils");

const AuthRoute = ({ children }) => {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace></Navigate>;
  }
};

export default AuthRoute;
