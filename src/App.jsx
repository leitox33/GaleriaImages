// App.js
import React, { useState, useContext } from 'react';
import './App.css';
import { ImgFull } from './ImgFull';
import { ImgCreate } from './ImgCreate';
import { ImgCreateFull } from './imgCreateFull';
import { UserContext } from './UserProvider';

function App() {
  const [full, setFull] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { state } = useContext(UserContext);
  const { images } = state;

  const mostrarFull = (img) => {
    setSelectedImage(img);
    setFull(true);
  };

  const imgUrls = [
    { url: "img/img1.jpg", title: "Luffy Negro" },
    { url: "img/img2.jpg", title: "Doflamingo Imagen 4k HD" },
    { url: "img/img3.jpg", title: "Luffy God" },
    { url: "img/img5.jpg", title: "Blanquesa pura como el alma misma del hombre mas blanco" },
    { url: "img/img7.jpg", title: "Dragon Ball" },
    { url: "img/img8.jpg", title: "Lorem ipsuipsa, eligendi cupiditate reiciendis maxime corrupti consequatur optio delectus nisi! Error, nemo explicabo?" },

  ];

  const createdImages = images.map((img, index) => ({ url: img.img, title: img.title }));

  const allImages = [...imgUrls, ...createdImages];

  return (
    <div className="container">
      <section className='imagenesCont'>
        {allImages.map((image, index) => (
          <img
            className="imagen"
            onClick={() => mostrarFull(image)}
            key={index}
            src={image.url}
            alt={`Imagen ${index}`}
          />
        ))}
      </section>

      {selectedImage && (images.some(img => img.url === selectedImage.url) ? (
        <ImgCreateFull full={full} selectedImage={selectedImage} setFull={setFull} />
      ) : (
        <ImgFull full={full} selectedImage={selectedImage} setFull={setFull} />
      ))}

      <ImgCreate />
    </div>
  );
}

export default App;
