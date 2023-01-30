import React from 'react'
import Hero from '../components/Hero'
import night from "../assets/night.jpg"

const About = () => {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={night}
                title="About"
                btnClass="hide"
            />
        </>
    )
}

export default About