import React from 'react'
import Hero from '../components/Hero'
import night from "../assets/night.jpg"
import AboutUs from '../components/AboutUs'

const About = () => {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={night}
                title="About"
                btnClass="hide"
            />
            <AboutUs/>
        </>
    )
}

export default About