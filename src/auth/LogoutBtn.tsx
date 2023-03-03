import { useAuth0 } from "@auth0/auth0-react";

const LogoutBtn = (): JSX.Element => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <button className="flex items-stretch" onClick={(): void => logout()}>
          <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-6 lg:pt-8 text-melo-rainy-blue">
            <span>Sign Out</span>
          </li>
        </button>
      )}
    </div>
  );
};

export default LogoutBtn;
