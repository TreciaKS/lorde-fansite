import React from 'react'

type Props = {
    title: string,
    description: string,
}

// use both css classes ans tailwind css as styles
const About = (props: Props) => {
  return (
    <>
        <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    </>
  )
}

export default About