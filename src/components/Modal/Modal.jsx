import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Modal.css';
import button from '../../images/close-button.svg'

import { CommentsList } from '../CommentsList';

export function Modal({ modalImage, setModalWindow, comments }) {
  const [userName, setUserName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const addUserName = event => setUserName(event.target.value);
  const addDescription = event => setDescription(event.target.value);
  const addComment = () => (
    axios.post('https://tzfrontend.herokuapp.com/comments/add/',
      JSON.stringify(newComment))
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      })
  );

  const newComment = {
    name: userName,
    description,
    image_id: 7,
  };

  return (
    <>
      <div className="App__modal-overlay" />
      <div className="App__modal modal">
        <img
          className="modal__close-button"
          src={button}
          alt="close button"
          onClick={() => setModalWindow(false)}
        />

        <form className="modal__form form">
          <img
            className="form__image"
            src={modalImage}
            alt=""
          />

          <label id="name" />
          <input
            className="form__input"
            type="text"
            id="name"
            value={userName}
            onChange={event => addUserName(event)}
            placeholder="Ваше имя"
          />

          <label id="comment" />
          <input
            className="form__input"
            type="text"
            id="comment"
            value={description}
            onChange={event => addDescription(event)}
            placeholder="Ваш комментарий"
          />

          <button
            className="form__btn"
            type="button"
            onClick={() => addComment()}
          >
            Оставить комментарий
          </button>
        </form>
        <CommentsList comments={comments} />
      </div>
    </>
  );
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  setModalWindow: PropTypes.func.isRequired,
};
