import React, { useEffect, useState } from 'react'
import './Episodes.css'

const Episodes = () => {

  const [episodes, setEpisodes] = useState()
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((res) => res.json())
      .then((data) => setEpisodes(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(episodes);

  return (
    <div>
        {/* {episodes?.map((results) => {
          console.log(results);
          return (
            <div key={episodes}>
              <div key={results.id}>
                
              </div>
            </div>)
        })} */}
    </div>
  )
}

export default Episodes