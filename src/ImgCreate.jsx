
import React, { useContext, useState } from 'react';
import { UserContext } from './UserProvider';

export const ImgCreate = () => {
  const [titleValue, setTitleValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { dispatch } = useContext(UserContext);


  const handleClick = () => {

    dispatch({
      type: 'CREATE_BOOK',
      payload: {
        title: titleValue,
        img: imageUrl,
      },
    });

    setTitleValue('');
    setImageUrl('');
  
  };

  const handleTitle = (e) => setTitleValue(e.target.value);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {

      const imageURL = URL.createObjectURL(file);
      setImageUrl(imageURL);
    }
  };

  return (
    <div className="createCont">
      <h3>Send Your Image</h3>
      <input type="text" placeholder="Title" className="input" value={titleValue} onChange={handleTitle}></input>
      <input onChange={handleFile} className="form-control file" type="file" id="formFile" />
      <button type="button" className="btn btn-light" onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
};
