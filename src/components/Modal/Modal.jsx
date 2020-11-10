import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import button from '../../images/close-button.svg';

import { CommentsList } from '../CommentsList';

export function Modal({ modalImage, setModalWindow, comments }) {
  const [userName, setUserName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const addUserName = event => setUserName(event.target.value);
  const addDescription = event => setDescription(event.target.value);

  return (
    <>
      <div className="App__modal-overlay" />
      <div className="App__modal modal">
        <div
          className="modal__close-button"
          role="button"
          onClick={() => setModalWindow(false)}
          tabIndex="0"
          onKeyPress={() => setModalWindow(false)}
        >
          <img
            src={button}
            alt="close button"
          />
        </div>

        <form className="modal__form form">
          <img
            className="form__image"
            src={modalImage}
            alt=""
          />

          <label>
            <input
              className="form__input"
              type="text"
              value={userName}
              onChange={event => addUserName(event)}
              placeholder="Ваше имя"
            />
          </label>

          <label>
            <input
              className="form__input"
              type="text"
              value={description}
              onChange={event => addDescription(event)}
              placeholder="Ваш комментарий"
            />
          </label>

          <button
            className="form__btn"
            type="button"
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
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
