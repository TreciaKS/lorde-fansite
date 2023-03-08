import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="bg-pure-white">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_yCCORfUI6a.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>
      </div>
      <h1 className="p-0 text-lg font-semibold capitalize -mt-96">
        Return to{" "}
        <NavLink
          to="/"
          className={"underline underline-offset-4 hover:tracking-wide"}
        >
          home?
        </NavLink>
      </h1>
    </section>
  );
};

export default NotFound;
