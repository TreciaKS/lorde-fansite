import { Player } from "@lottiefiles/react-lottie-player";

type Props = {}

const Loader = (props: Props) => {
  return (
    <section className="grid place-items-center">
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