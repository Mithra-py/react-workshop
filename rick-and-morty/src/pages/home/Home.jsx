import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';



const Home = ({ results }) => {
  const navigate = useNavigate();
  // console.log(results);
  return (
    <div className='homepage'>
      <div>
        <h1>Rick And Morty</h1>
      </div>
      <div className='homemiddlediv'>
        <img className='homeimg' src="https://the-rich-and-morty.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.dd1b07aa.webp&w=640&q=75" alt="" />
        <div>
          <p className='movieExplain'>
            Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim.
          </p>
          <p className='movieExplain'>
            The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
          </p>
        </div>
      </div>
      <span className='maincharactercard'>
        {results?.map((result) => {
          const { id, name, image } = result;
          console.log(result);
          return (
            <div
              onClick={() => navigate(`${id}`, { state: results })}>

              <div className='charactercard' key={`${id}`}>
                <img src={image} alt="" />
                <h3>{name}</h3>
              </div>
            </div>)
        })}
      </span>


    </div>
  )
}

export default Home