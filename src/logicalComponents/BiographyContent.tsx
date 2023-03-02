import React from 'react'

interface BiographyContents {
  name: string;
  colour: string;
}

const BiographyContent: React.FC<BiographyContents> = ({name, colour}) => {
  return (
    <>
      <div>{name}</div>
      <div>{colour}</div>
    </>
  );
}

export default BiographyContent