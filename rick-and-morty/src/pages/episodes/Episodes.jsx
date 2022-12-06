import React, { useEffect, useState } from 'react'
import './Episodes.css'

const Episodes = () => {

  const [episodes, setEpisodes] = useState({})
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((res) => res.json())
      .then((data) => setEpisodes(data))
      .catch((err) => console.log(err));
  }, []);

  const desEpisodes = (episodes.results)
  
  console.log(desEpisodes);
  

  return (
    <div className='episodes'>
       {desEpisodes?.map((result) => (
                    <div className='episodescard'>
                        <div key={result.id}>
                            <div>
                                <h3>Episode Name : {result.name}</h3>
                                <p>Episode : {result.episode}</p>
                                <p>Episode Air Date : {result.air_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
    </div>
  )
}

export default Episodes