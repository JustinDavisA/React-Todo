import React from 'react';

const ToDoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.value}
        name="toDo"
        onChange={props.changeHandler}
        placeholder="To Do..."
      />
      <button onClick={props.addHandler}>Add</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default ToDoForm;
