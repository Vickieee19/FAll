import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://wallpapers.com/images/file/red-and-green-background-3840-x-2400-ulw5hihhpfaaicwn.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(5px)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  const formContainerStyle = {
    position: 'relative',
    zIndex: 2,
    background: 'rgba(255, 255, 255, 0.85)',
    padding: '3rem',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
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

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.6)',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    transition: 'background 0.3s ease',
  };

  const inputFocusStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  const handleLoginClick = () => {
    // Assuming successful login
    navigate('/destination');
  };
  
  

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>VR Tour</h2>
        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
          onFocus={(e) => (e.target.style.background = inputFocusStyle.background)}
          onBlur={(e) => (e.target.style.background = inputStyle.background)}
          
        />
        <div style={{ position: 'relative' }}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            style={inputStyle}
            onFocus={(e) => (e.target.style.background = inputFocusStyle.background)}
            onBlur={(e) => (e.target.style.background = inputStyle.background)}
            
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#ff416c',
            }}
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </span>
        </div>
        <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.transform = buttonHoverStyle.transform)}
        onMouseOut={(e) => (e.target.style.transform = 'none')}
        onClick={handleLoginClick}  // Add this line
      >
  Login
</button>
        <button
          style={{ ...buttonStyle, background: '#4caf50', marginTop: '1rem' }}
          onMouseOver={(e) => (e.target.style.transform = buttonHoverStyle.transform)}
          onMouseOut={(e) => (e.target.style.transform = 'none')}
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
