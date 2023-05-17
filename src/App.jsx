import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './MoviePage/About';
import Trailer from './TrailerPage/Trailer';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/trailer" element={<Trailer />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;