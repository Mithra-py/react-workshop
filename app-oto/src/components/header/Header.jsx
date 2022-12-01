import React, { useState } from 'react';
import './Header.css';
import { RiArrowDownSLine } from 'react-icons/ri';



const Header = () => {

    const [hizmetler, setHizmetler] = useState(false)

    return (
        <div className='navMainContainer'>
            <ul className='navLeftside'>
                <div><a href="/"><img className='navLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png" alt="logo" /></a>
                </div>
                <li className='navLeftside'>
                    <a href="Araç Al">Araç Al</a>
                    <a href="Birlikte Alalım">Birlikte Alalım</a>
                    <a href="Araç Sat">Araç Sat</a>
                    <a href="Taksit Kolaylığı">Taksit Kolaylığı</a>
                    <a href="Hizmetler">
                        <div className='linkwithicon' onClick={() => setHizmetler(!hizmetler)}>Hizmetler<RiArrowDownSLine />
                        </div>
                    </a>
                </li>

                {hizmetler &&
                    <div>
                        <a href="tamir">Tamir</a>
                    </div>}
            </ul>

            <div className='linkwithicon'>
                <a className='navborder' href="Kurumsal Web Site">Kurumsal Web Site</a>
                <a className='navborder' href="KS">KS <RiArrowDownSLine /></a>
            </div>
        </div>
    )
}

export default Header