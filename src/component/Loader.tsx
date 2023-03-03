import { Player } from "@lottiefiles/react-lottie-player";

const Loader = (): JSX.Element => {
  return (
    <section className="grid h-screen place-items-center">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/private_files/lf30_HGg7Oa.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </section>
  );
}

export default Loader