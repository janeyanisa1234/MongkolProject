import React, { useState, useEffect } from "react";
import './Mongkol.css';
import { Link } from "react-router-dom";
import '@fontsource/ibm-plex-sans-thai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Monday() {
  const [colorsWithDescriptions, setColorsWithDescriptions] = useState([]); // Updated state
  const URL = "https://stunning-yodel-jjqwjpwqxpxr2pj77-5001.app.github.dev";

  useEffect(() => {
    // Fetch data from backend
    axios.get(`${URL}/tableData`)
      .then(response => {
        const tableData = response.data.tableData['วันจันทร์'];
        const colorMapping = response.data.colorMapping;

        // Create an array to hold color and description
        const colorsArray = [];

        // Loop through categories in tableData
        for (const category in tableData) {
          const colorNames = tableData[category].split(' ');
          colorNames.forEach(colorName => {
            colorsArray.push({
              color: colorMapping[colorName], // Get the color from colorMapping
              label: colorName,
              description: category // Use category as description
            });
          });
        }
        setColorsWithDescriptions(colorsArray); // Set the updated state
      })
      .catch(error => {
        console.error("Error fetching table data:", error);
      });
  }, []);

  return (
    <>
      <div className="logopageday">
        <Link to="/Homepage" className="plain-link">
          <h1>
            M<img src="/Pictures/sparkling.png" alt="Sparkling" width="20px" height="20" />ngkol <img src="/Pictures/back button.png" width="23px" height="23"/>
          </h1>
        </Link>
      </div>
      <div className="flower-bottom-left"></div>
      <div className="flower-top-right"></div>

      <div className="days-menu">
        <h1 className="textday">วันจันทร์</h1>
      </div>

      <div>
        <img className="image-day" src="/public/Pictures/monday.png" width="400px" height="400px" />
      </div>
      
      <div className="color-swatch-container">
        {colorsWithDescriptions.map((item, index) => (
          <div key={index} className="color-swatch">
            <div className="text">
              <p style={{ color: item.description === "สีกาลกิณี" ? "red" : "bold" }}>
                {item.description}
              </p>
              <p>{item.label}</p>
            </div>
            <div
              className="circle"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        ))}
      </div>

    </>
  );
}
