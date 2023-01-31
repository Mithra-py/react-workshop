import React from 'react'
import TripData from './TripData'
import "./TripStyles.css"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}
                    heading="Trip in İndonesia"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati fuga cupiditate soluta eum praesentium quas unde ducimus molestias accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati fuga cupiditate soluta eum praesentium quas unde ducimus molestias accusamus."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati fuga cupiditate soluta eum praesentium quas unde ducimus molestias accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati fuga cupiditate soluta eum praesentium quas unde ducimus molestias accusamus."
                />
                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati fuga cupiditate soluta eum praesentium quas unde ducimus molestias accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati fuga cupiditate soluta eum praesentium quas unde ducimus molestias accusamus."
                />
            </div>

        </div>
    )
}

export default Trip