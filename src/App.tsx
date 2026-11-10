import Header from "./components/Header";
import Footer from "./components/Footer";
import BookText from "./components/BookText";

function App() {
  return (
    <section className="page">
      <Header />
      <div className="book-info"> <BookText /> </div>
      <main> </main>
      <Footer />
    </section>
  );
}

export default App;
