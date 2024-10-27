import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, BrowserRouter } from "react-router-dom";
import './Mongkol.css';
import Homepage from './Homepage.jsx';
import '@fontsource/cinzel-decorative';


const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1 className="logo">M<img src="/Pictures/sparkling.png" alt="Sparkling" width="100px" height="100" />ngkol</h1>
        <Link to="Homepage">
          <button onClick={() => navigate('/Homepage')}>เข้าสู่เว็บไซต์ <span>&#9654;</span></button>
        </Link>
      </div>
      <div>
        <div className="flower-bottom-left"></div>
        <div className="flower-top-right"></div>
      </div>
    </>
  );
}

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Homepage" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);
export default App;
