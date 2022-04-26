import Deletebackground from "./Deletebackground";
import { useState } from "react"

function Todo(props) {
  const [toggle, setToggle] = useState(false);
  function setToggleOff() {
      setToggle(false);
  }
  function deleteHandler() {
      props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
  }
  return (
    <div id="todo">
      <div className="row">
        <button onClick={setToggle} className="deleteButton" type="button">
            +
        </button>
        <p className="todoItem">{props.todoName}</p>
      </div>
      {props.todoDate !== "" ? <p className="todoDate">{props.todoDate}</p> : null}
      {toggle ? <Deletebackground deleteHandler={deleteHandler} cancelOp={setToggleOff}></Deletebackground> : null}
    </div>
  );
}
export default Todo;
