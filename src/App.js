import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import Todo from "./pages/Todo";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <header>
        <NavBar currentPage={page} navigateTo={setPage} />
        {/* ähnlich NavBar({currentPage: page, navigateTo: setPage}) */}
      </header>
      <main>
        {page === "home" && <Home /> /**short circuit syntax */}
        {page === "about" ? <About /> : null}
        {page === "todo" && <Todo />}
        {page === "contact" && <Contact /> /** returns undefined */}
      </main>
      <footer>© Flamingos</footer>
    </div>
  );
}

export default App;
