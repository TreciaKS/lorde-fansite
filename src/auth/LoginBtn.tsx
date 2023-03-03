import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = (): JSX.Element => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button
          className="flex items-stretch"
          onClick={():Promise<void> => loginWithRedirect()}
        >
          <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-6">
            <span>Sign In</span>{" "}
          </li>
        </button>
      )}
    </>
  );
};

export default LoginBtn;
