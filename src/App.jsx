import React from 'react';
import './App.css'
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import Home from './Home';
import Header from './Header';
import {HashRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App