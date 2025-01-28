import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, movie, theatre, selectedSeats } = location.state || {};

  if (!name || !movie || !theatre || !selectedSeats) {
    alert("Missing reservation details. Redirecting to the home page.");
    navigate("/");
    return null;
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
    },
    card: {
      width: "100%",
      maxWidth: "400px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      borderRadius: "8px",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "24px",
    },
    details: {
      marginBottom: "10px",
      fontSize: "16px",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
      color: "#fff",
    },
    googlePay: {
      backgroundColor: "#34a853",
    },
    phonePe: {
      backgroundColor: "#3b5998",
    },
    paytm: {
      backgroundColor: "#002970",
    },
    icon: {
      width: "50px",
    },
  };

  const handlePayment = (method) => {
    alert(`Payment successful via ${method}!\nEnjoy your movie.`);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Payment Options</h1>
        <p style={styles.details}>Name: {name}</p>
        <p style={styles.details}>Movie: {movie}</p>
        <p style={styles.details}>Theatre: {theatre}</p>
        <p style={{ ...styles.details, marginBottom: "20px" }}>
          Seats: {selectedSeats.join(", ")}
        </p>

        <div style={styles.buttonGroup}>
          <button
            onClick={() => handlePayment("Google Pay")}
            style={{ ...styles.button, ...styles.googlePay }}
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
              alt="Google Pay"
              style={styles.icon}
            />
            Google Pay
          </button>
          <button
            onClick={() => handlePayment("PhonePe")}
            style={{ ...styles.button, ...styles.phonePe }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrEJyc4sONe680_ShobD5LmKwKl31QB1opQ&s"
              alt="PhonePe"
              style={styles.icon}
            />
            PhonePe
          </button>
          <button
            onClick={() => handlePayment("Paytm")}
            style={{ ...styles.button, ...styles.paytm }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9bieWuVszJ9drNCC-MsYUoBFjfThD2GPJg&s"
              alt="Paytm"
              style={styles.icon}
            />
            Paytm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
