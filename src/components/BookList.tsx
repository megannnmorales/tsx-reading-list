import BookCard from "./BookCard";

const books = [
  { id: 1, title: "Dune", author: "Frank Herbert", is_read: true },
  { id: 2, title: "Piranesi", author: "Susanna Clarke", is_read: false },
];

function BookList() {
  return (
    <section>
      <h2> This is my read book list:</h2>
      <ul>
        {books.map((book) => {
          return <li>{BookCard</li>;
        })}
      </ul>
    </section>
  );
}

export default BookList