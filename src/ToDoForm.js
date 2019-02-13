import React from 'react';

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        type="text"
        value={props.text}
        name="text"
        onChange={props.changeHandler}
        placeholder="To Do..."
      />
      <button type="submit">Add To Do</button>
    </form>
  )
}

export default ToDoForm;
