import React from 'react';

export const ImgCreateFull = ({ full, selectedImage, setFull }) => {
  const titleClass = full ? 'imgFull visible' : 'imgFull';
  const sectionClass = full ? 'title visible' : 'title';
  const handleClick = () => setFull(false);

  return (
    <div className={titleClass}>
      <section className={sectionClass}>
        {selectedImage && <h3 key={selectedImage.title}>{selectedImage.title}</h3>}
      </section>
      {selectedImage && <img src={selectedImage.url} alt="ImagenCreada" />}
      <i onClick={handleClick} className="fa-solid fa-x"></i>
    </div>
  );
};