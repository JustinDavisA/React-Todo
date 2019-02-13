import React from 'react';

function ToDo(props) {
  return (
    <div>
      <h2>{props.toDo.task}</h2>
      <h3>{props.toDo.id}</h3>
      <h3>{props.toDo.completed}</h3>
    </div>
  );
}

export default ToDo;