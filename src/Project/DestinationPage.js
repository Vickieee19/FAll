// DestinationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationPage = () => {
  const navigate = useNavigate();

  const handleTajMahalClick = () => {
    navigate('/tajmahal-vr');
  };

  const handleThanjavurTempleClick = () => {
    navigate('/thanjavur-temple-vr');
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Choose Your Destination</h2>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.transform = buttonHoverStyle.transform)}
          onMouseOut={(e) => (e.target.style.transform = 'none')}
          onClick={handleTajMahalClick}
        >
          Iceland Everest
        </button>
        <button
          style={{ ...buttonStyle, marginTop: '1.5rem' }}
          onMouseOver={(e) => (e.target.style.transform = buttonHoverStyle.transform)}
          onMouseOut={(e) => (e.target.style.transform = 'none')}
          onClick={handleThanjavurTempleClick}
        >
          Switzerland Mountain
        </button>
      </div>
    </div>
  );
};

// Styling for the destination page
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: 'url(https://source.unsplash.com/random)', // Replace with a specific background if desired
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backdropFilter: 'blur(5px)',
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 1,
};

const formContainerStyle = {
  position: 'relative',
  zIndex: 2,
  background: 'rgba(255, 255, 255, 0.85)',
  padding: '3rem',
  borderRadius: '15px',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  maxWidth: '400px',
  width: '100%',
};

const headingStyle = {
  marginBottom: '1.5rem',
  fontFamily: "'Poppins', sans-serif",
  color: '#333',
  fontSize: '2rem',
};

const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  background: 'linear-gradient(45deg, #34a853, #0f9d58)',
  border: 'none',
  borderRadius: '30px',
  color: 'white',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  marginTop: '1rem',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
};

const buttonHoverStyle = {
  transform: 'scale(1.05)',
};

export default DestinationPage;
