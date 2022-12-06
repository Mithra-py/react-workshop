import React from 'react';
import './About.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'

const About = () => {
  return (
    <div className='about'>
      <div className='abouttext'>
        <h1>Hello World!!!</h1>
        <p>This project includes the characters and features of the Rick and Morty series.</p>
        <p>This is the API service I use: <a href="https://rickandmortyapi.com/">The Rick and Morty API</a></p>
        <p>This website was built with Next JS. My goal was to build a website using data from a public API service.</p>
        <h3>Details:</h3>
        <ul>
          <li>You can see the details about the series and 20 characters on the main page. In addition, the Homepage has been created with the paginate structure, and you can examine it with the back and forth buttons for other characters.</li>
          <li>By clicking on the character cards, you can go to the character's detail page and get detailed information about the character.</li>
          <li>Click the Episodes tab on the menu to view all the episode details of the series.</li>
        </ul>
        <h3>I Used These Technologies :</h3>
        <ul>
          <li>React</li>
          <li>React Hooks</li>
          <li>Public API</li>
          </ul>
          
          <div>
            <h3>Communication Platforms :</h3>
            <div className='abouticons'>
              <a href="https://github.com/Mithra-py"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/ahmet-sait-%C3%BCnl%C3%BC-646b9814a/"><FaLinkedin/></a>
            <a href="mailto:ahmetsait239@gmail.com"><GoMail/></a>
            </div>
            
          </div>
        
      </div>
      <img src="https://i.pinimg.com/originals/30/c6/bc/30c6bc7241959483c27d466590e16148.png" alt="" />
    </div>

  )
}

export default About