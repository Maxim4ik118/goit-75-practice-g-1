import { Component } from 'react';
import PropTypes from 'prop-types';

export class BookFrom extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    genre: '',
    favourite: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const bookData = {
      ...this.state,
      year: Number.parseInt(this.state.year),
      cover: 'https://images.gr-assets.com/books/1361975680l/2657.jpg',
    };

    onSubmit(bookData);
    this.setState({
      title: '',
      author: '',
      year: '',
      genre: '',
      favourite: false,
    });
  };

  handleChangeInput = e => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      return;
    }

    this.setState({ [name]: value });
  };

  render() {
    const { title, author, year, genre, favourite } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'inline-flex', flexDirection: 'column' }}
      >
        <label>
          Title
          <input
            onChange={this.handleChangeInput}
            type="text"
            name="title"
            value={title}
            required
          />
        </label>

        <label>
          Author
          <input
            onChange={this.handleChangeInput}
            type="text"
            name="author"
            value={author}
            required
          />
        </label>

        <label>
          Year
          <input
            onChange={this.handleChangeInput}
            type="number"
            name="year"
            min="0"
            value={year}
            required
          />
        </label>

        <p>Genre</p>
        <label>
          Novel
          <input
            onChange={this.handleChangeInput}
            type="radio"
            name="genre"
            value="novel"
            required
            checked={genre === 'novel'}
          />
        </label>

        <label>
          Love
          <input
            onChange={this.handleChangeInput}
            type="radio"
            name="genre"
            value="love"
            required
            checked={genre === 'love'}
          />
        </label>

        <label>
          Fantasy
          <input
            onChange={this.handleChangeInput}
            type="radio"
            name="genre"
            value="fantasy"
            required
            checked={genre === 'fantasy'}
          />
        </label>

        <label>
          Favorite
          <input
            onChange={this.handleChangeInput}
            type="checkbox"
            name="favourite"
            checked={favourite}
          />
        </label>

        <button type="submit">Add book</button>
      </form>
    );
  }
}

BookFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// {
//       "id": "1",
//       "title": "To Kill a Mockingbird",
//       "author": "Harper Lee",
//       "year": 1960,
//       "genre": "novel",
//       "favourite": false,
//       "cover": "https://images.gr-assets.com/books/1361975680l/2657.jpg"
//     },
