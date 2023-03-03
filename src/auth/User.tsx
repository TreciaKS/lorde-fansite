import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
const { user, isAuthenticated } = useAuth0()
 /* {user?.picture && <img src={user.picture} alt={user?.name} /> } */

  return (
    <>
      {isAuthenticated && (
          <span className="inline-flex items-center justify-center gap-1 px-4 py-1 text-sm text-white capitalize bg-pink-500 rounded-full shadow-sm">
            {user?.nickname}
          </span>
      )}
    </>
  );
}

export default User