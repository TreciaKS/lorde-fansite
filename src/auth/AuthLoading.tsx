import { Player } from "@lottiefiles/react-lottie-player"

const AuthLoading = (): JSX.Element => {
  return (
    <section className="grid h-screen place-items-center">
      <Player
        autoplay
        loop={true}
        src="https://assets2.lottiefiles.com/packages/lf20_rdkzbvu0.json"
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </section>
  );
}

export default AuthLoading