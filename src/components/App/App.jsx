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

  render() {
    const { books } = this.state;

    return (
      <div>
        <BookFrom onSubmit={this.handleSubmitForm} />
        <BooksList booksList={books} />
      </div>
    );
  }
}
