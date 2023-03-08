/* eslint-disable jsx-a11y/iframe-has-title */
type Props = {
  albums: {
    id: number;
    albumArt3D?: string;
    albumTitle: string;
    albumSubtitle: string;
    albumDate: number;
    albumDescription: string;
    embedSRC: string;
    albumGenre: string[];
    popularAlbumTrack: string;
    myFavouriteTrack: string;
    myFavouriteTrackDescript: string;
  }[];
};

const AlbumsContent = ({ albums }: Props): JSX.Element => {
  return (
    <>
      {albums.map(
        (album): JSX.Element => (
          <section
            key={album.id}
            className="relative flex mx-8 my-4 overflow-hidden justify-evenly h-fit max-lg:flex-col max-sm:mx-2 rounded-2xl"
          >
            <div className="w-1/2 px-8 py-8 max-lg:w-full bg-pure-black">
              <div className="relative object-contain py-8 overflow-hidden group">
                <img
                  className="relative object-contain max-w-sm mx-auto transition duration-500 ease-in-out transform scale-110 translate-x-0 rounded-3xl h-96 group-hover:-translate-x-4 "
                  src={album.albumArt3D}
                  alt={album.albumTitle}
                  loading="lazy"
                />
                <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
              </div>

              <h3 className="py-4 text-3xl font-extrabold text-center max-md:text-xl text-solar-mustard">
                {album.albumTitle}
              </h3>
              <span className="block mb-4 -mt-4 text-lg text-center capitalize text-solar-sea-blue">
                {album.albumSubtitle} •{" "}
                <span className="font-bold text-solar-brown">{album.albumDate}</span>
              </span>

              <div className="flex justify-center mx-auto mt-4 mb-6">
                <span className="inline-block w-32 h-1 rounded-full bg-melo-sky-blue"></span>
                <span className="inline-block w-10 h-1 rounded-full bg-solar-brown"></span>
              </div>

              <p className="tracking-wide text-justify text-pure-white opacity-80">
                {album.albumDescription}
              </p>
            </div>

            <div className="grid w-1/2 px-8 py-8 text-center border-4 rounded-r-2xl max-lg:w-full place-items-center max-md:rounded-b-2xl max-md:rounded-t-none">
              <div className="px-8 pt-14 rounded-2xl">
                {" "}
                <h1 className="mb-2 text-2xl font-extrabold text-center max-md:text-lg text-solar-mustard">
                  My Favourite Song❓
                </h1>
                <p className="mb-2 text-lg tracking-wide max-md:text-md text-melo-sky-blue">
                  🎵 {album.myFavouriteTrack} 🎵
                </p>
                <div className="flex justify-center mx-auto mb-6">
                  <span className="inline-block w-10 h-1 rounded-full bg-melo-rainy-blue"></span>
                  <span className="inline-block h-1 rounded-full w-28 bg-solar-brown"></span>
                </div>
                <p className="font-semibold tracking-wide text-pure-grey">
                  {album.myFavouriteTrackDescript}
                </p>
              </div>
              <article className="relative object-contain w-full mb-6 overflow-hidden border-4 border-dotted mt-14 max-md:border-none rounded-2xl border-r-melo-rainy-blue border-l-solar-mustard border-t-solar-sea-blue border-b-pure-grey">
                <iframe
                  className="pt-10 pl-2 pr-2 -mb-16 max-md:mt-0 max-md:px-0"
                  style={{
                    borderRadius: "12px",
                    width: "100%",
                    height: "300px",
                  }}
                  src={album.embedSRC}
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={album.albumTitle}
                ></iframe>
              </article>
              <div className="flex w-full justify-evenly">
                <div className="p-6">
                  <h1 className="mb-2 text-xl font-extrabold text-melo-rainy-blue max-md:text-lg">
                    Album Genre
                  </h1>
                  <p className="-mt-2 text-sm font-semibold text-pure-black">
                    {album.albumGenre.join(" • ")}
                  </p>
                </div>
                <p className="border border-pure-black "></p>
                <div className="p-6">
                  <h1 className="mb-2 text-xl font-extrabold max-md:text-lg text-melo-rainy-blue">
                    Popular Track
                  </h1>
                  <p className="-mt-2 text-sm font-semibold text-pure-black">
                    {album.popularAlbumTrack}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default AlbumsContent;
