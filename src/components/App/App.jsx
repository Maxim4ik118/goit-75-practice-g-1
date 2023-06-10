import { Component } from 'react';
import { nanoid } from 'nanoid';
import { BookFrom } from 'components/BookFrom';
import { BooksList } from 'components/BooksList';
import booksData from 'db/books.json';

export class App extends Component {
  state = {
    books: booksData.books, // [{...}, {...} , ...newBook]
  };

  handleSubmitForm = book => {
    const newBook = { id: nanoid(), ...book };
    this.setState(({ books }) => ({ books: [...books, newBook] }));
  };

  handleBookDelete = id => {
    this.setState({ books: this.state.books.filter(item => item.id !== id) });
  };

  handleFavourites = id => {
    this.setState({
      books: this.state.books.map(item => {
        if (item.id === id) {
          return {
            ...item,
            favourite: !item.favourite,
          };
        }
        return item;
      }),
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div>
        <BookFrom onSubmit={this.handleSubmitForm} />
        <BooksList
          booksList={books}
          handleFavourites={this.handleFavourites}
          handleBookDelete={this.handleBookDelete}
        />
      </div>
    );
  }
}
