import React from 'react'
import './Talep.css'
import OtoCard from '../otocard/OtoCard'
import Odeme from '../odemeplan/Odeme'


const Talep = () => {
  return (
    <main>
        <h2>Talep Oluştur</h2>
        <p>Hayalinizdeki araca ulaşmak için son bir adım kaldı! Aşağıdaki yönergeleri kullanarak aracınız için randevunuzu kolayca alabilirsiniz.</p>
        <OtoCard/>
        <Odeme/>
    </main>
  )
}

export default Talep