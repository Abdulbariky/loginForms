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
      <div className="app-badges">
        <img src="/path-to-app-store-badge.png" alt="App Store" className="app-badge" />
        <img src="/path-to-play-store-badge.png" alt="Play Store" className="app-badge" />
        <img src="/path-to-windows-store-badge.png" alt="Windows Store" className="app-badge" />
        <img src="/path-to-huawei-appgallery-badge.png" alt="Huawei AppGallery" className="app-badge" />
      </div>
      <footer className="footer">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Gallery</a>
        <a href="#">Team</a>
      </footer>
    </div>
  );
};

export default BackgroundSwoosh;