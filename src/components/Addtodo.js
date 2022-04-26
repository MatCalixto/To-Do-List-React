function Addtodo(props) {
  function inputTextFunction(event) {
    props.setInputText(event.target.value);
  }
  function inputDateFunction(event) {
    props.setInputDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        date: props.inputDate,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    props.setInputText("");
    props.setInputDate("");
  }
  return (
    <form id="forms">
      <input
        value={props.inputText}
        onChange={inputTextFunction}
        className="input"
        type="text"
        placeholder="NEW TO DO"
      ></input>
      <div className="row">
        <input
          value={props.inputDate}
          onChange={inputDateFunction}
          id="date"
          className="input"
          type="text"
          placeholder="DUE DATE"
        ></input>
        <button onClick={submitHandler} className="addButton" type="submit">
          +
        </button>
      </div>
    </form>
  );
}
export default Addtodo;
