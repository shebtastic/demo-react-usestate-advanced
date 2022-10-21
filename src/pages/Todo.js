import { useState } from "react";

const todo = ["kaffee machen", "einkaufen gehen", "mit dem hund raus"];

function Todo() {
  const [todos, setTodos] = useState(todo);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    //identity vs equality
    setTodos((alterWert) => {
      const neuerWert = [...alterWert, data.todo];

      // geht nicht
      // alterWert[alterWert] = data.todo
      // return alterWert

      //geht auch nicht
      // const neuerWert = alterWert
      // alterWert[alterWert.length] = data.todo

      //performance optimierung
      // alterWert === neuerWert, kein rerender bailout
      // alterWert !== neuerWert, dann rerender
      return neuerWert;
    });
  }

  function deleteTodo(text) {
    console.log(text);
    setTodos((alteListe) => {
      const neueListe = alteListe.filter((item) => item !== text);
      return neueListe;
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Speichern</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={item + index} onClick={() => deleteTodo(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
