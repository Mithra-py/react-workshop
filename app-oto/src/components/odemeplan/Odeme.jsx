import React from 'react'
import './Odeme.css'

const Odeme = () => {
    return (<div className='topdivodeme'>
         <div className='planmaindiv'>
            <p className='odemetitle'>%50 Peşinat 12 Ay Taksit'li Ödeme Planınız</p>

            <div className='plandetay'>
                <div>
                    <input type="checkbox" /><span>Peşinat Bedeli:</span>
                    <p className='odemefiyat'>60.000 TL</p>
                </div>
                <div>
                    <input type="checkbox" /><span>Kalan Ödeme:</span>
                    <p className='odemefiyat'>1.100.000 TL</p>
                </div>
                <div>
                    <input type="checkbox" /><span>Aylık Taksit Tutarı:</span>
                    <p className='odemefiyat'>8.500 TL</p>
                </div>
                <a href= 'Odeme' className='plangoster'>
                    Ödeme Planını Göster
                </a>
            </div>
        </div>
        <div className='doublebutton'>
            <a className='dbbuttonleft' href="Çağrı Merkezi">Çağrı Merkezi Beni Arasın</a>
            <a className='dbbuttonright' href="Randevu">Randevu Oluştur</a>
        </div>

    </div>

       
    )
}

export default Odeme