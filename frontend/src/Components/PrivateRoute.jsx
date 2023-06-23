
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let ss = sessionStorage.getItem("Auth");
  if (!ss) {   
    return <Navigate to={'/auth'}/>
  }
  return children;
};
