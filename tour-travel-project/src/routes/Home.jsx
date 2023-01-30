import React from 'react'
import Hero from '../components/Hero'
import img12 from "../assets/12.jpg"
import Destination from '../components/Destination'

const Home = () => {
  return (
    <>
    <Hero
    cName="hero"
    heroImg={img12}
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    </>
  )
}

export default Home