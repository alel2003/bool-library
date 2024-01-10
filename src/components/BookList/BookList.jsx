import { useSelector, useDispatch } from "react-redux";
import { DeleteBook } from "../../redux/books/actionCreates";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { ToggleFavorite } from "../../redux/books/actionCreates";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter
} from "../../redux/slices/FilterSlice";
import "./BookList.css";

const BookList = () => {
    const books = useSelector((state) => state.books)

    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(DeleteBook(id))
    }

    const handleToggleBook = (id) => {
      dispatch(ToggleFavorite(id))
    }

    const filterBooks = books.filter(book => {
       const matchesTitle = book.title
         .toLowerCase()
         .includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author
          .toLowerCase()
          .includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
        return matchesTitle && matchesAuthor && matchesFavorite;
     })


     const higligthMatch = (text, filter) => {
      if(!filter) return text
      const regex = new RegExp(`(${filter})`, "gi");
      return text.split(regex).map((part, index) => {
        if(part.toLowerCase() === filter.toLowerCase()) {
          return (
            <span key={index} className="highlight">{part}</span>
          )
        }
        return part
      })
     }

  return (
    <div className="app-block book-list">
      {books.length === 0 ? (
        <p>NO BOOKS AVAIBALE</p>
      ) : (
        <ul>
          {filterBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {higligthMatch(book.title, titleFilter)} by <strong>{higligthMatch(book.author, authorFilter)}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleBook(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  DELETE
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
