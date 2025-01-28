import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Moviehome = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [theatre, setTheatre] = useState("");

  const theatres = [
    "PVR Cinemas",
    "Inox Movies",
    "Cinepolis",
    "Carnival Cinemas",
    "Miraj Cinemas"
  ];

  const handleNavigate = () => {
    if (name && movie && theatre) {
      navigate("/seats", { state: { name, movie, theatre } });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const imageba = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/assortment-cinema-supplies_23-2147803976.jpg?t=st=1738044602~exp=1738048202~hmac=36b870d76e11323e06ed228ae397ba4fe5685ef71594e1d41306915084595f06&w=996")',
    backgroundSize: "cover",
    
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={imageba}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        borderRadius: "8px",
        marginBottom: "20px"
        
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px" }}>Movie Reservation</h1>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{
            display: "block",
            marginBottom: "5px",
            fontSize: "14px",
            fontWeight: "bold"
          }}>Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "90%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="movie" style={{
            display: "block",
            marginBottom: "5px",
            fontSize: "14px",
            fontWeight: "bold"
          }}>Movie Name</label>
          <input
            id="movie"
            type="text"
            placeholder="Enter movie name"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            style={{
              width: "90%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="theatre" style={{
            display: "block",
            marginBottom: "5px",
            fontSize: "14px",
            fontWeight: "bold"
          }}>Select Theatre</label>
          <select
            id="theatre"
            value={theatre}
            onChange={(e) => setTheatre(e.target.value)}
            style={{
              width: "90%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          >
            <option value="">Select a theatre</option>
            {theatres.map((theatre, index) => (
              <option key={index} value={theatre}>{theatre}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleNavigate}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Moviehome;
