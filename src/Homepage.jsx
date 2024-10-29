import React from "react";
import './Mongkol.css';
import { Routes, Route, Link } from "react-router-dom";
import Monday from './Monday';

export default function Homepage() {
  return (
    <>
        <h1 className="logopage">M<img src="/Pictures/sparkling.png" alt="Sparkling" width="20px" height="20" />ngkol</h1>
        <Link to="/Monday"><button className="buttonMon">วันจันทร์ </button></Link>
        <button className="buttonTue">วันอังคาร </button>
        <button className="buttonWed"> วันพุธ  </button>
        <button className="buttonThu">วันพฤหัสบดี </button>
        <button className="buttonFri">วันศุกร์ </button>
        <button className="buttonSat"> วันเสาร์  </button>
        <button className="buttonSun"> วันอาทิตย์  </button>
        <div className="flower-bottom-left"></div>
        <div className="flower-top-right"></div>
    </>
  );
  
}
