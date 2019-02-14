import React from 'react';

const ToDoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.value}
        name="toDo"
        onChange={props.changeToDo}
        placeholder="To Do..."
      />
      <button onClick={props.addToDo}>Add</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default ToDoForm;
