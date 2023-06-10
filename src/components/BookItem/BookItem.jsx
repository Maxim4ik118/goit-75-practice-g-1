import React from 'react';
import css from './BookItem.module.css';
import { ReactComponent as IconHeart } from '../../assets/icons/heart.svg';

function BookItem({
  id,
  title,
  cover,
  author,
  year,
  genre,
  favourite,
  handleFavourites,
  handleBookDelete,
}) {
  return (
    <li className={css.card}>
      <div>
        <h2>{title}</h2>
        <img src={cover} alt={title} />
        <p>{author}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </div>
      <div className={css['buttons-container']}>
        <button onClick={() => handleFavourites(id)}>
          <IconHeart
            className={`${css.icon} ${favourite ? css.favourite : ''}`}
          />
        </button>
        <button onClick={() => handleBookDelete(id)}>&times;</button>
      </div>
    </li>
  );
}

export default BookItem;
