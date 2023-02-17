import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
