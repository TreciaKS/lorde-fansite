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
  }[]
}

const AlbumsContent = ({ albums }: Props): JSX.Element => {
  return (
    <>
      {albums.map((album) => (
        <section
          key={album.id}
          className="relative flex mx-8 my-4 overflow-hidden border justify-evenly h-fit max-lg:flex-col max-sm:mx-2"
        >
          <div className="w-1/2 px-8 py-8 border max-lg:w-full">
            <div className="relative object-contain py-8 overflow-hidden border group">
              <img
                className="relative object-contain mx-auto transition duration-500 ease-in-out transform scale-110 translate-x-0 rounded-lg shadow-md h-96 group-hover:-translate-x-4 shadow-pure-grey"
                src={album.albumArt3D}
                alt="01"
                loading="lazy"
              />
              <div className="absolute inset-0 transition duration-300 bg-yellow-900 opacity-0 group-hover:opacity-50"></div>
            </div>

            <h3>{album.albumTitle}</h3>
            <p>{album.albumSubtitle}</p>
            <p>{album.albumDate}</p>
            <p>{album.albumDescription}</p>
          </div>
          <div className="w-1/2 px-8 py-8 border max-lg:w-full">
            <p>{album.albumGenre.join(", ")}</p>
            <p>{album.popularAlbumTrack}</p>
            <p>{album.myFavouriteTrack}</p>
            <p>{album.myFavouriteTrackDescript}</p>
            <article className="relative object-contain mb-6 overflow-hidden border-4 rounded-lg ">
              <iframe
                className="pt-10 pl-10 pr-10 -mb-16 max-md:p-0"
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
          </div>
        </section>
      ))}
    </>
  );
};

export default AlbumsContent;
