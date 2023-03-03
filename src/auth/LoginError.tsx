import { Player } from "@lottiefiles/react-lottie-player"

const LoginError = (): JSX.Element => {
  return (
    <section className="grid h-screen place-items-center">
      <Player
        autoplay
        loop={false}
        src=" https://assets2.lottiefiles.com/packages/lf20_cdvzedxl.json"
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </section>
  );
}

export default LoginError