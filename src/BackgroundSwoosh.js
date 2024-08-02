import React from 'react';
import './BackgroundSwoosh.css';

const BackgroundSwoosh = ({ children }) => {
  return (
    <div className="background-container">
      <div className="swoosh-container">
        <div className="swoosh swoosh-1"></div>
        <div className="swoosh swoosh-2"></div>
        <div className="swoosh swoosh-3"></div>
      </div>
      <div className="logo">
        <h1>InventoTrack</h1>
      </div>
      <div className="content">
        {children}
      </div>      
    </div>
  );
};

export default BackgroundSwoosh;