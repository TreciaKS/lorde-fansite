import React from "react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-8 mb-8">
        <h1 className="text-4xl font-bold text-center text-melo-night-blue max-sm:text-2xl">Capture This 📸 </h1>
        <div className="flex justify-center mx-auto mt-3 mb-6">
          <span className="inline-block w-32 h-1 rounded-full bg-solar-mustard"></span>
          <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-sea-blue"></span>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10 max-sm:grid-cols-1 max-md:grid-cols-2">
          <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-melo-night-blue">
            <img
              className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
              src="./images/lorde_yellow_transparent.png"
              alt="01" loading="lazy"
            />
            <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
          </div>
          <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-melo-night-blue">
            <img
              className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
              src="./images/lorde_breezed.png"
              alt="01" loading="lazy"
            />
            <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
          </div>
          <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-melo-night-blue">
            <img
              className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
              src="./images/lorde_dark.png"
              alt="01" loading="lazy"
            />
            <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
          </div>
          <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-melo-night-blue">
            <img
              className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
              src="./images/artist-lorde-neon-light-4zbbs66dz5lpg8p3.jpg"
              alt="01" loading="lazy"
            />
            <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
          </div>
          <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-melo-night-blue">
            <img
              className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
              src="./images/lorde_blue_img.png"
              alt="01" loading="lazy"
            />
            <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
          </div>
          <div className="relative object-contain w-full overflow-hidden rounded-lg shadow-md group shadow-melo-night-blue">
            <img
              className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[420px] lg:object-top transition duration-500 ease-in-out transform scale-110 translate-x-4 group-hover:-translate-x-4"
              src="./images/lorde_performaance.png"
              alt="01" loading="lazy"
            />
            <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
