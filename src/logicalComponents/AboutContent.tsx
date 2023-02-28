import { ReactElement, ReactNode } from "react";

type Props = {
  abouts: ReactNode;
  title: string;
  description: string;
  favoriteTrackTitle: string;
  favouriteTrackDescription: string;
};

// use both css classes and tailwind css as styles
// returning only an element
const AboutContent = ({
  abouts,
  title,
  description,
  favoriteTrackTitle,
  favouriteTrackDescription,
}: Props): ReactElement => {
  return (
    <>
      <section>
        {abouts.map((about: string) => (
          <div key={about.id}>
            <h1>{about.title}</h1>
            <p>{about.description}</p>
            <p>{about.favoriteTrackTitle}</p>
            <p>{about.favouriteTrackDescription}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutContent;
