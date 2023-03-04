import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = (): JSX.Element => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <section className="pt-10 sm:pt-16 md:pt-0 2xl:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold leading-relaxed text-black md:mt-12 sm:text-5xl lg:text-7xl">
                For the <span className="text-solar-brown">l</span>ove{" "}
                <span className="text-solar-brown">o</span>f{" "}
                <span className="text-solar-brown">r</span>eal,{" "}
                <span className="text-solar-brown">d</span>elightfully{" "}
                <span className="text-solar-brown">e</span>ccentric melody.
              </h2>
              <p className="max-w-lg mt-3 text-xl font-semibold leading-relaxed text-pure-grey md:mt-6">
                “Don’t be afraid. Be the kind of person your mother warned you
                about.”
              </p>
              {isAuthenticated && (
                <span className="relative inline-block mt-4 text-md md:mt-8">
                  <button className="px-6 py-2 font-bold tracking-wide capitalize transition-colors duration-300 transform rounded-full shadow-md shadow-pure-grey hover:bg-pure-grey bg-pure-black focus:outline-none focus:ring focus:ring-pure-grey focus:ring-opacity-80 text-pure-white">
                    <NavLink to={"/biography"}>Biography</NavLink>
                  </button>
                </span>
              )}
            </div>
            {/* max-w-6xl xl:mx-auto xl:max-w-[35rem] 2xl:origin-bottom 2xl:scale-110 */}
            <div className="relative object-fill w-full max-w-6xl p-2 max-md:mt-6 ">
              <img
                className="relative w-full max-lg:rounded-full max-lg:h-min"
                src="./images/lorde_bw.png"
                alt="Lorde with long hair, belived to be her Melodrama era in black and white"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
