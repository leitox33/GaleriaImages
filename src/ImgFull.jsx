import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

export const ImgFull = ({ full, selectedImage, setFull }) => {
  const titleClass = full ? 'imgFull visible' : 'imgFull';
  const sectionClass = full ? 'title visible' : 'title';
  const handleClick = () => setFull(false);
  const { state } = useContext(UserContext);
  const { images } = state;
  return (
    <div className={titleClass}>
      <section className={sectionClass}>
        {selectedImage && <h3 key={selectedImage.title}>{selectedImage.title}</h3>}
      </section>

      {selectedImage && <img src={selectedImage.url} alt="Imagen" />}
      <i onClick={handleClick} className="fa-solid fa-x"></i>
    </div>
  );
};

