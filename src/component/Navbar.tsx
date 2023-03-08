// Links
import { NavLink } from "react-router-dom";

// state
import { useState } from "react";

// Authentication
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "../auth/LoginBtn";
import LogoutBtn from "../auth/LogoutBtn";
import User from "../auth/User";

const Navbar = (): JSX.Element => {
  const { isAuthenticated, error, isLoading } = useAuth0();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 w-full bg-white/90 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
        <div className="mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav className="relative flex h-[5.5rem] items-stretch justify-between font-medium">
            {/* logo */}
            <div className="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1">
              <img src="lorde_logo.png" alt="" className="w-12 h-12" />
            </div>

            {/* responsive menu */}
            <button
              className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
              onClick={(): void => setOpen(!open)}
            >
              <div className="absolute w-6 transition-all duration-200 ease-in transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {open ? (
                  <span className="text-2xl font-extrabold"> X</span>
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full transition-all duration-300 bg-melo-night-blue"
                    ></span>
                    <span
                      aria-hidden="true"
                      className="absolute block h-0.5 w-6 transform rounded-full transition duration-300 bg-melo-night-blue"
                    ></span>
                    <span
                      aria-hidden="true"
                      className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full transition-all duration-300 bg-melo-night-blue"
                    ></span>
                  </>
                )}
              </div>
            </button>
            {/* max-lg:left-72 max-lg:border-2 opacity-0 max-lg:z-20 max-lg:hover:opacity-100 max-lg:min-w  */}
            {!error && !isLoading && (
              <ul
                className={`max-lg:bg-pure-white max-lg:w-64 max-lg:top-[5.5rem] max-lg:pt-4 max-lg:-right-6 absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-y-auto overscroll-contain px-8 pb-12 pt-28 font-medium transition-all ease-in-out duration-500 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                  open ? "max-lg:block shadow-lg max-lg:h-fit" : "max-lg:hidden"
                }`}
              >
                <NavLink
                  to="/"
                  className="flex items-stretch"
                  style={({ isActive }) => {
                    return { color: isActive ? "#89450E" : " " };
                  }}
                >
                  <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-6">
                    <span>Home</span>
                  </li>
                </NavLink>
                {isAuthenticated && (
                  <>
                    <NavLink
                      to="/about"
                      className="flex items-stretch"
                      style={({ isActive }) => {
                        return { color: isActive ? "#89450E" : " " };
                      }}
                    >
                      <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-6">
                        <span>About</span>{" "}
                      </li>
                    </NavLink>
                    <NavLink
                      to="/biography"
                      className="flex items-stretch"
                      style={({ isActive }) => {
                        return { color: isActive ? "#89450E" : " " };
                      }}
                    >
                      <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-6">
                        <span>Biography</span>{" "}
                      </li>
                    </NavLink>
                    <NavLink
                      to="/albums"
                      className="flex items-stretch"
                      style={({ isActive }) => {
                        return { color: isActive ? "#89450E" : " " };
                      }}
                    >
                      <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-6">
                        <span>Albums</span>{" "}
                      </li>
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className="flex items-stretch"
                      style={({ isActive }) => {
                        return { color: isActive ? "#89450E" : " " };
                      }}
                    >
                      <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-6">
                        <span>Gallery</span>{" "}
                      </li>
                    </NavLink>
                    <NavLink
                      to="/socials"
                      className="flex items-stretch"
                      style={({ isActive }) => {
                        return { color: isActive ? "#89450E" : " " };
                      }}
                    >
                      <li className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-6">
                        <span>Socials</span>{" "}
                      </li>
                    </NavLink>
                  </>
                )}
                <LoginBtn />
                <LogoutBtn />
              </ul>
            )}

            {isAuthenticated && (
              <div className="flex items-center justify-end px-8 ml-auto font-bold tracking-wide lg:ml-0 lg:flex-1 text-pure-white">
                <User />
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
