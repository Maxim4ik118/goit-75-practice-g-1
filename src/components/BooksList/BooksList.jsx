import PropTypes from 'prop-types';
import css from './BooksList.module.css';

export const BooksList = ({ booksList }) => (
  <ul className={css.list}>
    {Array.isArray(booksList) &&
      booksList.map(({ id, title, cover, author, year, genre }) => (
        <li key={id}>
          <div className={css.card}>
            <h2>{title}</h2>
            <img src={cover} alt={title} />
            <p>{author}</p>
            <p>{year}</p>
            <p>{genre}</p>
          </div>
        </li>
      ))}
  </ul>
);

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
