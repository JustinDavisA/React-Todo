import React from 'react';

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.changeHandler}
        placeholder="To Do..."
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default ToDoForm;
