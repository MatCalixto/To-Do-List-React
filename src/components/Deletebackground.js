function Deletebackground(props) {
  return (
    <div id="deleteItem">
      <div id="deleteBackground" onClick={props.cancelOp}></div>
      <div className="box">
        <p id="deleteTitle">DELETE TO DO</p>
        <div style={{ justifyContent: "center" }} className="row">
          <button id="cancelButton" onClick={props.cancelOp}>Cancel</button>
          <button id="confirmButton" onClick={ function() {props.cancelOp(); props.deleteHandler();}}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
export default Deletebackground;
