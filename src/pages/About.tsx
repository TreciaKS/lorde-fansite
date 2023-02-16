import { ReactElement } from "react";

type Props = {
  title: string;
  description: string;
};

// use both css classes and tailwind css as styles
// returning only an element
const About = ({ title, description }: Props): ReactElement => {
  return (
    <>
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </>
  );
};

export default About;
