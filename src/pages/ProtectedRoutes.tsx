import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  children: ReactNode;
};

const ProtectedRoutes = ({ children }: Props): JSX.Element => {
  const { isAuthenticated } = useAuth0()
  
  return (
    <>
      {!isAuthenticated && <Navigate to="/" />}
      {children}
    </>
  );}

export default ProtectedRoutes;
