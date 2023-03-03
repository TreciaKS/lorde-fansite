import { Player } from "@lottiefiles/react-lottie-player";

const Loader = (): JSX.Element => {
  return (
    <section className="grid h-screen place-items-center">
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_mc8b7ral.json"
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </section>
  );
}

export default Loader