type Props = {
    albums: {
        "id": number;
        "albumArt3D"?: string;
        "albumTitle": string;
        "albumSubtitle": string;
        "albumDate": number;
        "albumDescription": string;
        "embedSRC": string;
        "albumGenre": string[];
        "popularAlbumTrack": string;
        "myFavouriteTrack": string;
        "myFavouriteTrackDescript": string;
    }[]
}

const AlbumsContent = ({ albums }: Props): JSX.Element => {
  return (
    <div>
        {albums.map(album => (
            <div key={album.id}>
                <h3>{album.albumTitle}</h3>
                <p>{album.albumSubtitle}</p>
                <p>{album.albumDate}</p>
                <p>{album.albumDescription}</p>
                <p>{album.embedSRC}</p>
                <p>{album.albumGenre.join(", ")}</p>
                <p>{album.popularAlbumTrack}</p>
                <p>{album.myFavouriteTrack}</p>
                <p>{album.myFavouriteTrackDescript}</p>
            </div>
        ))}
    </div>
  )
}

export default AlbumsContent