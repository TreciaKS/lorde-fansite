import { ReactElement } from "react";

type Props = {
  abouts: {
    id: number;
    title: string;
    description: string;
    favoriteTrackTitle: string;
    favouriteTrackDescription: string;
  }
};

// use both css classes and tailwind css as styles
// returning only an element
const AboutContent = ({ abouts }: Props): ReactElement => {
  return (
    <>
      <section>
        <h2>{abouts.title}</h2>
        <p>{abouts.description}</p>
        <p>{abouts.favoriteTrackTitle}</p>
        <p>{abouts.favouriteTrackDescription}</p>
      </section>
    </>
  );
};

export default AboutContent;
