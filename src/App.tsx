import Header from "./components/Header";
import Footer from "./components/Footer";
import BookText from "./components/BookText";
import BookCard from "./components/BookCard";
import { BOOKS } from "./data/books";

function App() {
  return (
    <section className="page">
      <Header />
      <ul>
        <li>
          <BookCard book={BOOKS[0]} />
        </li>
        <li>
          <BookCard book={BOOKS[1]} />
        </li>
      </ul>
      <main> </main>
      <Footer />
    </section>
  );
}

export default App;
