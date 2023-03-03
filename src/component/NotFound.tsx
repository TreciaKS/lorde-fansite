import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () : JSX.Element=> {

  return (
    <section className="grid h-screen place-items-center">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_yCCORfUI6a.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </section>
  );
}

export default NotFound