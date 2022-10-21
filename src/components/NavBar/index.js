// import { useState } from "react"

import "./NavBar.css";

function NavBar(props) {
  console.log(props);
  const { currentPage, navigateTo } = props;
  // const [page, setPage] = useState("home")

  return (
    <nav>
      <ul>
        <li>
          <button
            className={currentPage === "home" ? "active" : ""}
            onClick={() => navigateTo("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={currentPage === "about" ? "active" : ""}
            onClick={() => navigateTo("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={currentPage === "todo" ? "active" : ""}
            onClick={() => navigateTo("todo")}
          >
            ToDo
          </button>
        </li>
        <li>
          <button
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => navigateTo("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
