import React from 'react'
import "./DestinationStyles.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <div className='first-des'>
                <div className='des-text'>
                    <h2>Taal Volcano, Batangas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores ullam animi, ducimus consequatur voluptatibus quaerat debitis nemo repudiandae dicta a maxime mollitia cupiditate similique repellendus sint officia illum voluptatum vel, autem hic expedita? Accusantium possimus iste minima porro dignissimos, odit in repellendus incidunt ipsa hic reprehenderit odio sapiente quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, necessitatibus ratione sit deleniti iusto in accusamus repudiandae tempore corporis!</p>
                </div>
                <div className='image'>
                <img src={img1} alt="dest-img" />
                <img src={img2} alt="dest-img" />
                </div>
            </div>
        </div>
    )
}

export default Destination