import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='mainnavdiv'>
        <ul className='navpageslink'>
    
                <li>
                    <Link to='/'><img className='logoimg' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" /></Link>
                </li>
                </ul>
                
                <ul className='navpageslink'>
                <li>
                <Link className='link' to='/'>HOME</Link>
                </li>
                <li>
                <Link className='link' to='Episodes'>EPİSODES</Link>
                </li>
                <li>
                <Link className='link' to='About'>ABOUT</Link>
                </li>
        </ul>
    </div>
  )
}

export default Navbar