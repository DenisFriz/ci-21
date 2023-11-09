import React from 'react';
import Home from './menuComponents/Home';

// MainPage component
const MainPage = ({ tabPage}) => {
  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    margin: '0 0 20px 0',
    color: '#5D1049',
  };

  const textStyle = {
    fontSize: '1.2rem',
    margin: '0',
    maxWidth: '600px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome to Our Website</h1>
      {tabPage ===1 ?
       <Home />
      : tabPage ===2 
      ?
      <p style={textStyle}>
        Explore our wide range of services and products. We aim to deliver exceptional value and satisfaction to all our customers. 
        Feel free to browse aroungfggfgfgfgffggffgfggf
      </p>
      :<p style={textStyle}>
      Hello
    </p>}
    </div>
  );
};

export default MainPage;
