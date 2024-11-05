import React, { useState, useEffect } from "react";
import './Mongkol.css';
import { Link } from "react-router-dom";
import '@fontsource/ibm-plex-sans-thai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // เพิ่มการ import axios

export default function Homepage() {
  const [showDays, setShowDays] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [colorMapping, setColorMapping] = useState({});
  const [tableData, setTableData] = useState({});
  
  const URL = "https://redesigned-acorn-v6wvxx4rx4j36jj-5002.app.github.dev";

  useEffect(() => {
    axios.get(`${URL}/tableData`)
      .then(response => {
        setTableData(response.data.tableData); // อัปเดต `tableData` ให้ตรง
        setColorMapping(response.data.colorMapping); // อัปเดต `colorMapping` ให้ตรง
      })
      .catch(error => {
        console.error("Error fetching table data:", error);
      });
  }, []);

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

  const toggleDays = () => {
    setShowDays(!showDays);
  };

  return (
    <>
      <div className="logopage">
        <h1>
          M<img src="/Pictures/sparkling.png" alt="Sparkling" width="20px" height="20" />ngkol
        </h1>
      </div>

      <div className="flower-bottom-left"></div>
      <div className="flower-top-right"></div>

      <div className="days-menu">
        <h1 onClick={toggleDays} className="greettext">สวัสดี{currentDay}</h1>

        {showDays && (
          <ul className="day-options">
            <Link to="/Monday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันจันทร์</h1>
            </Link>
            <Link to="/Tuesday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันอังคาร</h1>
            </Link>
            <Link to="/Wednesday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันพุธ</h1>
            </Link>
            <Link to="/Thursday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันพฤหัสบดี</h1>
            </Link>
            <Link to="/Friday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันศุกร์</h1>
            </Link>
            <Link to="/Saturday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันเสาร์</h1>
            </Link>
            <Link to="/Sunday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันอาทิตย์</h1>
            </Link>
          </ul>
        )}
      </div>

      <div className="table" style={{ marginTop: '70px', textAlign: 'center', background: 'white' }}>
        <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>วัน</th>
              {tableData['วันอาทิตย์'] && Object.keys(tableData['วันอาทิตย์']).map((category) => (
                <th key={category}>{category}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(tableData).map((day) => (
              <tr key={day}>
                <td>{day}</td>
                {Object.keys(tableData[day]).map((category) => (
                  <td key={category} style={{ padding: '10px' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}>
                      {tableData[day][category].split(' ').map((color, index) => (
                        <div key={index} style={{ textAlign: "center", margin: '-2px' }}>
                          <FontAwesomeIcon
                            icon={faShirt}
                            style={{
                              width: '40px',
                              height: '20px',
                              margin: '5px auto',
                              color: colorMapping[color] || 'black',
                              backgroundColor: color === 'ขาวบริสุทธิ์' ? 'black' : 'transparent',
                            }}
                          />
                          <span style={{
                            display: 'block',
                            fontSize: '10px',
                            marginTop: '5px',
                            color: colorMapping[color] || 'black',
                            backgroundColor: color === 'ขาวบริสุทธิ์' ? 'black' : 'transparent',
                            padding: '6px'
                          }}>{color}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="credit">สีมงคลเสริมดวงชะตา ประจำปี 2567 หมอไก่ พ.พาทินี</h2>
      </div>
    </>
  );
}
