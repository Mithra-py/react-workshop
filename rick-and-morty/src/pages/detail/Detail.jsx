import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';


const Detail = () => {

  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(character);


  const { name, image, status, gender, species, } = character
  return (
    <div className='detail'>
      <h1>{name}</h1>
      <div className='detailcard'>
        <img src={image} alt={name} />
        <div className='detailcardbody'>
        <h2>Name: {name}</h2>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p>Location: {character.location?.name}</p>
        <p>Originally From: {character.origin?.name}</p>
        </div>
      </div>
    </div>
  );
};



export default Detail