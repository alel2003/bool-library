import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from "../../redux/books/actionCreates"
import CreateBookWIthId from "../../utils/CreateBookWIthId";
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            const book = CreateBookWIthId({title, author})
            dispatch(AddBook(book))
            setTitle('')
            setAuthor('')
        }
    }

    const handleAddRandom = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBooks = booksData[randomIndex]
        const randomBookWithId = CreateBookWIthId(randomBooks)

        dispatch(AddBook(randomBookWithId))
    }
  return (
    <div className="app-block book-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">ADD BOOK</button>
        <button
          type="button"
          onClick={handleAddRandom}
        >
          ADD RANDOM
        </button>
      </form>
    </div>
  );
}

export default BookForm
