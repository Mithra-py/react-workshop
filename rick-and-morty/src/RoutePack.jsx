import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Episodes from './pages/episodes/Episodes';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import NotFound from './pages/notfound/NotFound';
import axios from 'axios';
import Detail from './pages/detail/Detail';

const
    RoutePack = () => {

        const url = "https://rickandmortyapi.com/api/character";
        const [results, setResults] = useState()

        const getData = async () => {
            try {
                const { data } = await axios.get(url);
                setResults(data.results);
                // console.log(data.results);
            } catch (error) {
                console.log(error);
            }
        };


        useEffect(() => {
            getData()
        }, [])


        return (
            <div>
                <Navbar />
                <Routes className='Routes' >
                    <Route path='/' element={<Home results = {results}/>} />
                    <Route path=':id' element={<Detail/>} />
                    <Route path='Episodes' element={<Episodes />} />
                    <Route path='About' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        )
    }

export default RoutePack
