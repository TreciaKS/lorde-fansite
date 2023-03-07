const Gallery = () : JSX.Element => {
  return (
    <section className="mx-auto mt-8 mb-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-melo-night-blue max-sm:text-2xl">
        Capture This 📸{" "}
      </h1>
      <div className="flex justify-center mx-auto mt-3 mb-6">
        <span className="inline-block w-32 h-1 rounded-full bg-solar-mustard"></span>
        <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-sea-blue"></span>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10 max-sm:grid-cols-1 max-md:grid-cols-3">
        <div className="relative object-contain w-full col-span-2 overflow-hidden rounded-lg shadow-md max-sm:col-span-1 group shadow-pure-grey">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
            src="./images/lorde_breezed.png"
            alt="Lorde wearing a blue-ish jacket with a red top, looking directly at the camera with the wind blowing her hair to her right."
            loading="lazy"
          />
          <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
        </div>

        <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-pure-grey">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
            src="./images/lorde_yellow_transparent.png"
            alt="A paint brush-like overlay with yellow, green and turquoise colours as background. In the center of it, is a cartoonised drawing of Lorde."
            loading="lazy"
          />
          <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
        </div>

        <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-pure-grey">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
            src="./images/lorde_dark.png"
            alt="Lorde has straigthed brown hair to the back, with a string of looking at the camera on her right side. She's wearing a white turtleneck and black office trousers."
            loading="lazy"
          />
          <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
        </div>

        <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-pure-grey max-md:col-span-2 max-sm:col-span-1">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
            src="./images/lorde_blue_img.png"
            alt="Lorde is sitting down, her body facing her right side while staring at the camera. She has blown out brown curly hair and is wearing a blue t-shirt with black arm sleeves."
            loading="lazy"
          />
          <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
        </div>

        <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-pure-grey">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
            src="./images/lorde_performaance.png"
            alt="Lorde has her eyes closed, while she has her left hand stroking her hair. She's waering a plain greyish t-shirt."
            loading="lazy"
          />
          <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
        </div>

        <div className="relative object-contain w-full col-span-2 overflow-hidden rounded-lg shadow-md group shadow-pure-grey max-sm:col-span-1">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
            src="./images/artist-lorde-neon-light-4zbbs66dz5lpg8p3.jpg"
            alt="Lorde is inn a dark room full of neon lights. She is standing in the far right, has her hair in a bun while wearing a white shirt without a tie."
            loading="lazy"
          />
          <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
