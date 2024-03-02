import "./Gallery.scss";
import React, { useState } from "react";

function Gallery({ name, images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <section className="gallery">
      <p className="title">{name}</p>
      <div className="slider">
        <div onClick={handlePrevClick} className="arrowButton"></div>
        <div className="imageContainer">
          <img
            src={process.env.PUBLIC_URL + images[currentImage]}
            alt={`Zdjęcie ${currentImage + 1}`}
          />
        </div>
        <div onClick={handleNextClick} className="arrowButton"></div>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image}
            alt={`Miniatura ${index + 1}`}
            className={index === currentImage ? "activeThumbnail" : ""}
            onClick={() => setCurrentImage(index)}
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
