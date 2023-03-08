import { Player } from "@lottiefiles/react-lottie-player"

const AuthLoading = (): JSX.Element => {
  return (
    <section className="grid h-screen place-items-center">
      <Player
        autoplay
        loop={true}
        src="https://assets10.lottiefiles.com/private_files/lf30_tglowewx.json"
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </section>
  );
}

export default AuthLoading