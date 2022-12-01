import React, { useState } from 'react'
import './Footer.css'
import {FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Modal from '../modal/Modal'

const Footer = () => {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='mainfooterdiv'>
        <div className='footerdiv'>
          <div className='popupitems'>
            <span onClick={()=> {
              setModalOpen(!modalOpen)
            }}>KVKK</span>
            <span>Aydınlatma Metni</span>
            <span>Çerez Politikası</span>
          </div>
          <div className='footericonsdiv'>
            <i><FaFacebookSquare/></i>
            <i><FaInstagram/></i>
            <i><FaLinkedin/></i>
          </div>
        </div>
  
  
        <p className='m-0 p-1'>Copyright©2022 - Mithra.com</p>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
      
  )
}

export default Footer