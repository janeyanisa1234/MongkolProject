import React, { useState, useEffect } from "react";
import './Mongkol.css';
import { Link } from "react-router-dom";
import '@fontsource/ibm-plex-sans-thai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Tuesday() {
  const [colorsWithDescriptions, setColorsWithDescriptions] = useState([]);
  const [comments, setComments] = useState([]); // State for comments
  const [newComment, setNewComment] = useState(""); // State for new comment input
  const [editingCommentIndex, setEditingCommentIndex] = useState(null); // For tracking which comment is being edited
  const [editedComment, setEditedComment] = useState(""); // For storing the edited comment
  const URL = "https://automatic-capybara-pjg57xq66wp427wpg-5002.app.github.dev";

  useEffect(() => {
    // Fetch data from backend
    axios.get(`${URL}/tableData`)
      .then(response => {
        const tableData = response.data.tableData['วันอังคาร'];
        const colorMapping = response.data.colorMapping;

        const colorsArray = [];
        for (const category in tableData) {
          const colorNames = tableData[category].split(' ');
          colorNames.forEach(colorName => {
            colorsArray.push({
              color: colorMapping[colorName],
              label: colorName,
              description: category
            });
          });
        }
        setColorsWithDescriptions(colorsArray);
      })
      .catch(error => {
        console.error("Error fetching table data:", error);
      });
  }, []);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input after submitting
    }
  };

  const handleEditClick = (index) => {
    setEditingCommentIndex(index); // Set the index of the comment being edited
    setEditedComment(comments[index]); // Pre-fill the textarea with the comment to edit
  };

  const handleEditChange = (e) => {
    setEditedComment(e.target.value); // Update the edited comment
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedComment.trim()) {
      const updatedComments = [...comments];
      updatedComments[editingCommentIndex] = editedComment; // Replace the comment at the specified index
      setComments(updatedComments);
      setEditingCommentIndex(null); // Reset the editing state
      setEditedComment(""); // Clear the edit input
    }
  };

  const handleDeleteClick = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index); // Remove the comment at the specified index
    setComments(updatedComments);
  };

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
        <h1 className="textday">วันอังคาร</h1>
      </div>

      <div>
        <img className="image-day" src="/public/Pictures/tuesday.png" width="400px" height="400px" alt="Monday" />
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

      {/* Comment Section */}
      <div className="comment-section">
        <h2>แสดงความคิดเห็น</h2>
        
        {/* Add Comment Form */}
        {!editingCommentIndex && (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="เพิ่มข้อความที่นี่..."
              rows="4"
              required
            />
            <button className="buttonComment" type="submit">ส่งความคิดเห็น</button>
          </form>
        )}

        {/* Edit Comment Form */}
        {editingCommentIndex !== null && (
          <form onSubmit={handleEditSubmit}>
            <textarea
              value={editedComment}
              onChange={handleEditChange}
              placeholder="แก้ไขความคิดเห็น"
              rows="4"
              required
            />
            <button type="submit">บันทึก</button>
          </form>
        )}

        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
              <button onClick={() => handleEditClick(index)}>แก้ไข</button>
              <button onClick={() => handleDeleteClick(index)}>ลบ</button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional space to ensure scrolling */}
      <div style={{ height: '500px' }}></div>
    </>
  );
}
