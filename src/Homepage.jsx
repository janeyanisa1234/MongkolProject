import React, { useState, useEffect } from "react";
import './Mongkol.css';
import { Link } from "react-router-dom";
import '@fontsource/ibm-plex-sans-thai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import Monday from "./Monday";

export default function Homepage() {
  const [showDays, setShowDays] = useState(false);
  const [currentDay, setCurrentDay] = useState("");

  // Define the color mapping based on the colors in the image
  const colorMapping = {
    'ทุกโทนแดง': '#951519',
    'ทุกโทนเขียว': '#21723E',
    'ชมพูอ่อน': '#FFC0CB',
    'เขียวใบไม้': '#00A572',
    'ดำสนิท': 'black',
    'เทาดำ': '#555555',
    'ขาวบริสุทธิ์': 'white',
    'น้ำเงินเข้ม': '#003366',
    'ชมพูสด': '#FF69B4',
    'ชมพูบานเย็น': '#F27091',
    'ครีมอ่อน': '#DBCC90',
    'ครีมสะอาด': '#F4D25D',
    'ทอง': '#D1B654',
    'แดงเลือดหมู': '#8B0000',
    'แดงเลือดนก': '#A00020',
    'เงิน': '#BCC4C1',
    'น้ำตาลแดง': '#8B4513',
    'เหลืองสด': '#FFD700',
    'ม่วงเข้ม': '#800080',
    'ม่วงอ่อน': '#BD9DC2',
    'เขียวหยก': '#00796B',
    'ฟ้าอ่อน': '#ADD8E6',
    'น้ำตาลอ่อน': '#DCC169',
    'เหลืองอ่อน': '#FFFACD',
    'เขียวแก่': '#17372A',
    'ส้มสว่าง': '#F25821',
    'ฟ้ายีนส์': '#223640',
    'ชมพูกลีบบัว': '#DD6D91',
    'ม่วงลาเวนเดอร์': '#AC83A8',
    'เหลืองสว่าง': '#FFDE2C',
    'กรมท่า': '#1B2C55',
    'ม่วงทึบ': '#400643',
    'ฟ้าสดใส': '#7DBFB8',
    'เขียวพาสเทล': '#58986F',
    'น้ำตาลไหม้': '#522E1A',
    'เขียวเข้ม': '#17372A'
  };

  // Define the table data based on the image content
  const tableData = {
    'วันอาทิตย์': {
      'เมตตามหานิยม': 'ทุกโทนแดง',
      'งานปัง': 'ชมพูอ่อน',
      'โชคดี': 'เขียวใบไม้',
      'โชคลาภเงินทอง': 'ดำสนิท เทาดำ',
      'ผู้ใหญ่เอ็นดู': 'เงิน ทอง',
      'สีกาลกิณี': 'น้ำเงินเข้ม'
    },
    'วันจันทร์': {
      'เมตตามหานิยม': 'ขาวบริสุทธิ์ ครีมอ่อน',
      'งานปัง': 'เขียวแก่',
      'โชคดี': 'ม่วงอ่อน ดำสนิท เทาดำ',
      'โชคลาภเงินทอง': 'ส้มสว่าง น้ำตาลอ่อน',
      'ผู้ใหญ่เอ็นดู': 'ฟ้ายีนส์',
      'สีกาลกิณี': 'แดงเลือดนก'
    },
    'วันอังคาร': {
      'เมตตามหานิยม': 'ชมพูกลีบบัว',
      'งานปัง': 'ม่วงลาเวนเดอร์ เทาดำ',
      'โชคดี': 'ส้มสว่าง น้ำตาลอ่อน',
      'โชคลาภเงินทอง': 'เงิน ทอง',
      'ผู้ใหญ่เอ็นดู': 'แดงเลือดหมู',
      'สีกาลกิณี': 'เหลืองสว่าง'
    },
    'วันพุธ': {
      'เมตตามหานิยม': 'ทุกโทนเขียว',
      'งานปัง': 'ส้มสว่าง น้ำตาลอ่อน',
      'โชคดี': 'เงิน ทอง',
      'โชคลาภเงินทอง': 'ฟ้าอ่อน กรมท่า',
      'ผู้ใหญ่เอ็นดู': 'ขาวบริสุทธิ์ ครีมอ่อน',
      'สีกาลกิณี': 'ชมพูสด ชมพูบานเย็น'
    },
    'วันพฤหัสบดี': {
      'เมตตามหานิยม': 'ส้มสว่าง น้ำตาลอ่อน',
      'งานปัง': 'ฟ้าอ่อน',
      'โชคดี': 'ทุกโทนแดง',
      'โชคลาภเงินทอง': 'เหลืองสว่าง ครีมสะอาด',
      'ผู้ใหญ่เอ็นดู': 'ทุกโทนเขียว',
      'สีกาลกิณี': 'ดำสนิท ม่วงทึบ'
    },
    'วันศุกร์': {
      'เมตตามหานิยม': 'ฟ้าสดใส น้ำเงินเข้ม',
      'งานปัง': 'เหลืองสว่าง ขาวบริสุทธิ์',
      'โชคดี': 'ชมพูอ่อน',
      'โชคลาภเงินทอง': 'เขียวพาสเทล',
      'ผู้ใหญ่เอ็นดู': 'ส้มสว่าง น้ำตาลอ่อน',
      'สีกาลกิณี': 'เงิน น้ำตาลไหม้'
    },
    'วันเสาร์': {
      'เมตตามหานิยม': 'ม่วงอ่อน ดำสนิท เทาดำ',
      'งานปัง': 'เงิน น้ำตาลไหม้',
      'โชคดี': 'ฟ้าสดใส น้ำเงินเข้ม',
      'โชคลาภเงินทอง': 'ทุกโทนแดง',
      'ผู้ใหญ่เอ็นดู': 'ชมพูกลีบบัว',
      'สีกาลกิณี': 'เขียวเข้ม'
    },
  };

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
        <h1 onClick={toggleDays} className="text">สวัสดี{currentDay}</h1>

        {showDays && (
          <ul className="day-options">
            <Link to="/Monday" className="plain-link">
              <h1 onClick={toggleDays} className="text">วันจันทร์</h1>
            </Link>
            <h1 onClick={toggleDays} className="text">วันอังคาร</h1>
            <h1 onClick={toggleDays} className="text">วันพุธ</h1>
            <h1 onClick={toggleDays} className="text">วันพฤหัสบดี</h1>
            <h1 onClick={toggleDays} className="text">วันศุกร์</h1>
            <h1 onClick={toggleDays} className="text">วันเสาร์</h1>
            <h1 onClick={toggleDays} className="text">วันอาทิตย์</h1>
          </ul>
        )}
      </div>

      <div className="table" style={{ marginTop: '100px', textAlign: 'center', background: 'white',  }}>
        <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>วัน</th>
              {Object.keys(tableData['วันอาทิตย์']).map((category) => (
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
      <h2 >สีมงคลเสริมดวงชะตา ประจำปี 2567 หมอไก่ พ.พาทินี</h2>
      </div>
    </>
  );
}
