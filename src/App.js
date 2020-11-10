import React, { useEffect } from 'react';
import './App.css';

import { getModalImage, getImages, getComments } from './api/api';

import { Gallery } from './components/Gallery';
import { Modal } from './components/Modal';

function App() {
  const [images, setImages] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [modalImage, setModalImage] = React.useState('');
  const [modalWindow, setModalWindow] = React.useState(false);

  useEffect(() => {
    getImages().then((imagesFromServer) => {
      setImages(imagesFromServer);
    });
  }, []);

  const handleImage = (imageId) => {
    getComments(imageId).then((commentsFromServer) => {
      setComments(commentsFromServer);
    });

    getModalImage(imageId).then((image) => {
      setModalImage(image.src);
    });

    setModalWindow(true);
  };

  return (
    <>
      <div className="App">
        <h1 className="App__title">test app</h1>
        <Gallery
          images={images}
          handleImage={handleImage}
        />

        {modalWindow && (
          <Modal
            modalImage={modalImage}
            setModalWindow={setModalWindow}
            getComments={getComments}
            comments={comments}
          />
        )}
      </div>

      <footer className="App__footer footer">
        <div className="footer__line" />
        <p className="footer__text">&copy; 2018-2019</p>
      </footer>
    </>
  );
}

export default App;
