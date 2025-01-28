import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Seat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, movie, theatre } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!name || !movie || !theatre) {
    alert("Missing reservation details. Redirecting to the home page.");
    navigate("/");
    return null;
  }

  const totalSeats = 50;
  const seatNumbers = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirm = () => {
    if (selectedSeats.length > 0) {
      navigate("/payment", {
        state: {
          name,
          movie,
          theatre,
          selectedSeats,
        },
      });
    } else {
      alert("Please select at least one seat.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f4f4" }}>
      <div style={{ width: "100%", maxWidth: "600px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff", borderRadius: "8px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px" }}>Select Seats</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
          {seatNumbers.map((seat) => (
            <button
              key={seat}
              onClick={() => handleSeatSelection(seat)}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: selectedSeats.includes(seat) ? "#007bff" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {seat}
            </button>
          ))}
        </div>
        <button
          onClick={handleConfirm}
          style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer" }}
        >
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default Seat;
