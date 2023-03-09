import { useState } from 'react';
import AlbumsData from '../data/albums.json'
import AlbumsContent from '../logicalComponents/AlbumsContent';

const Albums = (): JSX.Element => {
  // eslint-disable-next-line
  const [albums, setAlbums] = useState(AlbumsData);

  return (
    <>
      <AlbumsContent albums={albums} />
    </>
  );
}

export default Albums