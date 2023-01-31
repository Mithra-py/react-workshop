import React from 'react'
import Hero from '../components/Hero'
import img from "../assets/1.jpg"

const Service = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={img}
        title="Service"
        btnClass="hide"
      />
    </>
  )
}

export default Service