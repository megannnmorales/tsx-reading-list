import type { Book } from "../types";

interface BookCardProps {
  book: Book;
}

function BookCard(props: BookCardProps) {
  const { book } = props;
  const { title, author, genre, is_read } = book;

  if (is_read)
    return (
      <li className="book-card">
        <>
          <h2>{title}</h2>
        </>
        <div className="book-info"></div>
        <p>{author}</p>
        <p>{genre}</p>
        <div className="book-actions">
          {is_read && <span className="badge"> Read </span>}
          <button
            type="button"
            aria-label={`Mark ${is_read ? "unread" : "read"} ${title}`}
          >
            {" "}
            {is_read ? "Mark unread" : "Mark read"}{" "}
          </button>
          <button>delete</button>
        </div>
      </li>
    );
}

export default BookCard;
