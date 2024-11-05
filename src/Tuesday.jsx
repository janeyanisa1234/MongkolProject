import React, { useState, useEffect } from "react";
import './Mongkol.css';
import { Link } from "react-router-dom";
import '@fontsource/ibm-plex-sans-thai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Tuesday() {
  const [colorsWithDescriptions, setColorsWithDescriptions] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentIndex, setEditingCommentIndex] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const URL = "https://redesigned-acorn-v6wvxx4rx4j36jj-5002.app.github.dev";

  useEffect(() => {
    // Fetch data for colors and initial comments
    fetchColors();
    fetchComments();
  }, []);

  const fetchColors = () => {
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
      .catch(error => console.error("Error fetching table data:", error));
  };

  const fetchComments = () => {
    axios.get(`${URL}/data`)
      .then(response => setComments(response.data))
      .catch(error => console.error("Error fetching comments:", error));
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        await axios.post(`${URL}/insert`, { comment: newComment });
        setNewComment("");
        fetchComments(); // Refresh comments immediately after insert
      } catch (error) {
        console.error("Error inserting comment:", error);
      }
    }
  };

  const handleEditClick = (index) => {
    setEditingCommentIndex(index);
    setEditedComment(comments[index].comment);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (editedComment.trim()) {
      try {
        const commentId = comments[editingCommentIndex]._id;
        await axios.put(`${URL}/update/${commentId}`, { comment: editedComment });
        setEditingCommentIndex(null);
        setEditedComment("");
        fetchComments(); // Refresh comments immediately after update
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    }
  };

  const handleDeleteClick = async (index) => {
    try {
      const commentId = comments[index]._id;
      await axios.delete(`${URL}/delete/${commentId}`);
      fetchComments(); // Refresh comments immediately after delete
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <>
      <div className="logopageday">
        <Link to="/Homepage" className="plain-link">
          <h1>
            M<img src="/Pictures/sparkling.png" alt="Sparkling" width="20px" height="20" />ngkol 
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
        {editingCommentIndex === null && (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
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
              onChange={(e) => setEditedComment(e.target.value)}
              placeholder="แก้ไขความคิดเห็น"
              rows="4"
              required
            />
            <button type="submit">บันทึก</button>
          </form>
        )}

        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={comment._id} className="comment">
              <p>{comment.comment}</p>
              <button onClick={() => handleEditClick(index)}>แก้ไข</button>
              <button onClick={() => handleDeleteClick(index)}>ลบ</button>
              <hr style={{height: "1px", backgroundColor: "grey"}}></hr>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/Homepage">
          <button className="buttonBack"><span>&#9664;</span> กลับสู่หน้าหลัก</button>
        </Link>
      </div>
    </>
  );
}
