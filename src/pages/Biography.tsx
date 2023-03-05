import { useState } from 'react';
import BioData from '../data/biography.json';
import BiographyContent from '../logicalComponents/BiographyContent';

const Biography = (): JSX.Element => {
const [biography, setBiography] = useState(BioData);

  return (
    <>
      <BiographyContent biography={biography} />
    </>
  )
}

export default Biography