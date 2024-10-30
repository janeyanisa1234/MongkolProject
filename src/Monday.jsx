import React, { useState, useEffect } from "react";
import './Mongkol.css';
import { Link } from "react-router-dom";
import '@fontsource/ibm-plex-sans-thai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import Homepage from "./Homepage";

export default function Monday() {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const daysInThai = [
      "วันอาทิตย์",
      "วันจันทร์",
      "วันอังคาร",
      "วันพุธ",
      "วันพฤหัสบดี",
      "วันศุกร์",
      "วันเสาร์"
    ];

    const today = new Date().getDay();
    setCurrentDay(daysInThai[today]);
  }, []);

  const colors = [
    { color: "#FFFFFF", label: "ขาวบริสุทธิ์", description: "เมตตามหานิยม" },
    { color: "#D8C9A8", label: "ครีมอ่อน", description: "เมตตามหานิยม" },
    { color: "#1D3D2D", label: "เขียวแก่", description: "งานปัง" },
    { color: "#B9A0CB", label: "ม่วงอ่อน", description: "โชคดี" },
    { color: "#000000", label: "ดำสนิท", description: "โชคดี" },
    { color: "#383429", label: "เทาดำ", description: "โชคดี" },
    { color: "#FF5733", label: "ส้มสว่าง", description: "โชคลาภ เงินทอง" },
    { color: "#D3A165", label: "น้ำตาลอ่อน", description: "โชคลาภ เงินทอง" },
    { color: "#13293D", label: "ฟ้าเข้ม", description: "ผู้ใหญ่เมตตา เอ็นดู" },
    { color: "#A00020", label: "แดงเลือดนก", description: "กาลกิณี" },
  ];


  return (
    <>
      <div className="logopage">
        <h1>
          M<img src="/Pictures/sparkling.png" alt="Sparkling" width="20px" height="20" />ngkol
        </h1>
      </div>
      <div className="flower-bottom-left"></div>
      <div className="flower-top-right"></div>

      <div class="days-menu">
        <h1 className="text">{currentDay}</h1>
      </div>

      <div class="image-day">
        <img src="/public/Pictures/image 1.png" alt="Sparkling" width="500px" height="500" />
      </div>

      <div className="color-swatch-container">
        {colors.map((item, index) => (
          <div key={index} className="color-swatch">
            <div className="text">
              <p>{item.label}</p>
              <p>{item.description}</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        ))}
      </div>

      
      <div>
        <Link to="/Homepage">
          <button className="buttonBack">Home Page <span>&#9654;</span></button>
        </Link>
      </div>
      
    </>
  );
  
}
