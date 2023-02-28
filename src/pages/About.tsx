import * as React from 'react';
import { useState } from 'react';
import AboutContent from '../logicalComponents/AboutContent'
import aboutData from "../data/about.json";


const About = () => {
  const [abouts, setAbouts] = useState(aboutData);

  return (
    <div>
      FIXME:<AboutContent abouts={abouts} />
    </div>
  )
}

export default About