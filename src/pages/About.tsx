import * as React from 'react';
import { useState } from 'react';
import AboutContent from '../logicalComponents/AboutContent'
import aboutData from "../data/about.json";


const About = () => {
  const [abouts, setAbouts] = useState(aboutData);

  return (
    <div>
      FIXME:<AboutContent abouts={aboutData} title='Hello' description='thus' favoriteTrackTitle='this' favouriteTrackDescription='this also'/>
    </div>
  )
}

export default About