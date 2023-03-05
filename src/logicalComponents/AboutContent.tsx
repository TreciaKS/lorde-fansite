import { ReactElement } from "react";

type Props = {
  abouts: {
    id: number;
    title: string;
    description: string;
    favoriteTrackTitle: string;
    favouriteTrackDescription: string;
    embedSongURL: string;
  };
};

// use both css classes and tailwind css as styles
// returning only an element
const AboutContent = ({ abouts }: Props): ReactElement => {
  return (
    <>
      <div className="grid h-screen grid-rows-3 gap-3 mx-2 tracking-wide text-black max-sm:-pb-12 lg:grid-cols-4 md:grid-cols-2 max-md:-mb-14 max-sm:-mb-16 max-md:h-fit">
        <article className="grid overflow-y-auto shadow-md rounded-2xl place-items-center lg:row-span-3 md:row-span-1 bg-melo-night-blue shadow-melo-night-blue max-md:bg-pure-white max-md:shadow-none ">
          <div className="px-1 py-10 mx-auto">
            <h1 className="text-2xl font-bold text-center capitalize max-md:text-melo-night-blue text-pure-white lg:text-3xl">
              Let's talk favorite song
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 rounded-full bg-solar-sea-blue"></span>
              <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-brown"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-solar-sea-blue"></span>
            </div>

            <div className="flex items-start max-w-6xl mx-auto mt-16 max-md:mx-5 ">
              <div>
                <div className="text-center text-pure-white lg:mx-6">
                  <h1 className="mb-3 -mt-5 text-2xl font-bold capitalize text-solar-mustard">
                    {abouts.favoriteTrackTitle}
                  </h1>
                  <p className="text-pure-white max-md:text-melo-night-blue">
                    {abouts.favouriteTrackDescription}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center mt-8">
                  <p className="text-2xl">🎶🎶</p>

                  <div className="mt-4 text-center">
                    <h1 className="font-semibold text-melo-rainy-blue">
                      Pure Heroin: Extended Version
                    </h1>
                    <span className="text-sm text-pure-white max-md:text-melo-night-blue">
                      Alternative | Indie Pop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="pt-12 overflow-y-scroll shadow-md rounded-xl bg-pure-black lg:col-span-2 lg:row-span-2 md:row-span-3 shadow-pure-black max-lg:place-items-center max-lg:grid">
          <div className="container px-1 mx-auto">
            <h1 className="text-2xl font-semibold text-center capitalize text-melo-rainy-blue lg:text-3xl">
              {abouts.title}
            </h1>
            <div className="flex justify-center mx-auto mt-3">
              <span className="inline-block w-2 h-1 rounded-full bg-pure-grey"></span>
              <span className="inline-block w-32 h-1 mx-1 rounded-full bg-solar-mustard"></span>
              <span className="inline-block w-12 h-1 rounded-full bg-solar-brown"></span>
            </div>

            <div className="flex items-start max-w-6xl mx-auto mt-16">
              <div className="font-semibold text-center text-solar-sea-blue lg:mx-8 max-md:mx-4">
                <div className="mb-3 -mt-8">🎵🎵🎵</div>
                <p className="">{abouts.description}</p>
                <p className="pt-5">
                  With artists like Lorde 🎤, Coldplay 🥁 and The Verve 🎸 (some
                  of you may know this awesome band, a 'one hit wonder' they
                  call them) and many more, it is hard for me to even mention
                  what my favourite song is. Because there is NO BAD SONG!
                </p>
                <p className="pt-5 pb-5">
                  If you also happen to be a fan of Lorde, do let me know what
                  your favourite Lorde song is, and possibly why 🙏, reach out
                  to me and let the music take over.
                </p>
              </div>
            </div>
          </div>
        </article>
        <div className="grid object-contain w-full p-0 overflow-hidden border-b-4 shadow-md rounded-2xl lg:row-span-2 place-items-center border-solar-mustard shadow-solar-mustard">
          <img
            src="./images/lorde_chill.png"
            alt="Lorde in black jacket, long brown hair and pinkish lipstick"
            className="w-full"
          />
        </div>
        <article className="relative object-contain overflow-hidden border-b-4 rounded-lg shadow-md lg:col-start-2 lg:col-span-3 lg:row-start-3 shadow-melo-sky-blue max-md:h-fit max-md:mb-32">
          <iframe
            className="pl-10 pr-10 mx-auto mt-14"
            style={{
              borderRadius: "12px",
              width: "100%",
              height: "300px",
            }}
            src="https://open.spotify.com/embed/album/22YruYAHSJb8TxSmk1PBKn?utm_source=generator"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </article>
      </div>
    </>
  );
}

export default AboutContent;
