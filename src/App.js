import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
