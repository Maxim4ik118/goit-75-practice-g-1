import PropTypes from 'prop-types';
import css from './BooksList.module.css';
import BookItem from 'components/BookItem/BookItem';

export const BooksList = ({
  booksList,
  handleFavourites,
  handleBookDelete,
}) => {
  const favouriteBooks = booksList.filter(book => book.favourite);
  const nonFavouriteBooks = booksList.filter(book => !book.favourite);
  return (
    <ul className={css.list}>
      {Array.isArray(favouriteBooks) &&
        favouriteBooks.map(
          ({ id, title, cover, author, year, genre, favourite }) => (
            <BookItem
              key={id}
              id={id}
              title={title}
              cover={cover}
              author={author}
              year={year}
              genre={genre}
              favourite={favourite}
              handleFavourites={handleFavourites}
              handleBookDelete={handleBookDelete}
            />
          )
        )}
      {Array.isArray(nonFavouriteBooks) &&
        nonFavouriteBooks.map(
          ({ id, title, cover, author, year, genre, favourite }) => (
            <BookItem
              key={id}
              id={id}
              title={title}
              cover={cover}
              author={author}
              year={year}
              genre={genre}
              favourite={favourite}
              handleFavourites={handleFavourites}
              handleBookDelete={handleBookDelete}
            />
          )
        )}
    </ul>
  );
};

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
