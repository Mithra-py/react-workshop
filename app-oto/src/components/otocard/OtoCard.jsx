import React from 'react'
import './OtoCard.css'
import { HiDotsHorizontal } from 'react-icons/hi'
import { GiSteeringWheel } from 'react-icons/gi'
import { TbManualGearbox, TbEngine } from 'react-icons/tb'
import { BsFillDropletFill, BsDot} from 'react-icons/bs'
const OtoCard = () => {
    return (
        <div className='maincarddiv'>
            
            <div>
                <img className='cardimg' src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_960_720.png" alt="araba" />
            </div>

            <div>
                <div className='cardup'>
                    <div className='cardtitle'>
                        <strong>CHEVROLET</strong>
                        <p>Camaro</p>
                    </div>
                    <div className='cardtitle'>
                        <p>beyaz</p>
                        <i className='icondots'><HiDotsHorizontal /></i>
                    </div>

                </div>
                <p>Bluetooth, Anahtarsız Kontak, Navigasyon Sistemi, Akıllı Motor Sis.</p>
                <p className='carquality'><GiSteeringWheel  className='qualityicon'/> 70.000 KM <BsDot/>  <TbManualGearbox className='qualityicon'/> Otomatik <BsDot/> <BsFillDropletFill className='qualityicon'/> Dizel <BsDot/><TbEngine className='qualityicon'/> 1.2 TSI</p>
               
                <div className='pricediv'>
                    <div>
                        <p>Peşin</p>
                        <h2>600.000 TL</h2>
                    </div>
                    <div>
                        <p>Taksitle</p>
                        <h2>700.000 TL</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtoCard