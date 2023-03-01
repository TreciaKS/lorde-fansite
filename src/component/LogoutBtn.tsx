import { useAuth0 } from "@auth0/auth0-react";

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && (<button onClick={() => logout()}>Sign Out</button>)}
    </div>
  );
};

export default LogoutBtn;
