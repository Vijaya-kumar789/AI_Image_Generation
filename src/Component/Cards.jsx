import React from 'react'
import download from '../assets/download.png'
import downloadImage from '../utils/index.js'

const Cards = ({ _id, name, prompt, photo }) => {
  return (
    <div className="custom-card">
      <img
        className="card-image"
        src={photo}
        alt={prompt}
      />
      <div className="custom-hover-box">
        <p className="prompt-text">{prompt}</p>

        <div className="info-section">
          <div className="name-section">
            <div className="initial">{name[0]}</div>
            <p className="name">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="download-button"
          >
            <img
              src={download}
              alt="download"
              className="download-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards

