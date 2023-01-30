import React from 'react'
import "./DestinationStyles.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import DestinationData from './DestinationData'

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData

                className="first-des"
                heading="Taal Volcano, Batangas"

                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ullam animi, ducimus consequatur voluptatibus quaerat debitis nemo repudiandae dicta a maxime mollitia cupiditate similique repellendus sint officia illum voluptatum vel, autem hic expedita? Accusantium possimus iste minima porro dignissimos, odit in repellendus incidunt ipsa hic reprehenderit odio sapiente quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, necessitatibus ratione sit deleniti iusto in accusamus repudiandae tempore corporis!"

                img1={img1}
                img2={img2}
            />

            <DestinationData

                className="first-des-reverse"
                heading="Mt. Daauldul, Batanaas"

                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ullam animi, ducimus consequatur voluptatibus quaerat debitis nemo repudiandae dicta a maxime mollitia cupiditate similique repellendus sint officia illum voluptatum vel, autem hic expedita? Accusantium possimus iste minima porro dignissimos, odit in repellendus incidunt ipsa hic reprehenderit odio sapiente quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, necessitatibus ratione sit deleniti iusto in accusamus repudiandae tempore corporis!"

                img1={img3}
                img2={img4}
            />
        </div>
    )
}

export default Destination