import React from 'react'
import './Main.css'
import { data } from '../../helpers/data.js'

const Main = () => {

  return (
    <div className='main'>
      {data.map((data) => {
        const { id, title, desc, image } = data
        return (
          <div className='card-container'>
            <div key={id}>
              <div className='card-title'>{title}</div>
              <img className='card-img' src={image} alt="" />
            </div>
              <div className="card-over">
              <p>
                {desc}
              </p>
            </div>
          </div>


        )
      })}
    </div>
  )
}

export default Main