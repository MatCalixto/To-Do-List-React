import { useState } from "react";
import Addtodo from "./components/Addtodo";
import Todo from "./components/Todo";
function App() {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div id="app">
      <header id="header">
        <h1 id="title">TO DO LIST</h1>
        <Addtodo
          todos={todos}
          setTodos={setTodos}
          inputDate={inputDate}
          setInputDate={setInputDate}
          inputText={inputText}
          setInputText={setInputText}
        ></Addtodo>
      </header>
      <main id="main">
        {todos.map(todo => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} todoName={todo.text} todoDate={todo.date} ></Todo>
        ))}
      </main>
    </div>
  );
}
export default App;
