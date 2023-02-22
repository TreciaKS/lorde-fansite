import { ReactElement } from "react";

type Props = {
  title: string;
  description: string;
  favoriteTrackTitle: string;
  favouriteTrackDescription: string;
};

// use both css classes and tailwind css as styles
// returning only an element
const About = ({ title, description , favoriteTrackTitle , favouriteTrackDescription}: Props): ReactElement => {
  return (
    <>
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{favoriteTrackTitle}</p>
        <p>{favouriteTrackDescription}</p>
      </section>
    </>
  );
};

export default About;
