import React from 'react'
import Hero from '../components/Hero'
import night from "../assets/night.jpg"

const Service = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={night}
        title="Service"
        btnClass="hide"
      />
    </>
  )
}

export default Service