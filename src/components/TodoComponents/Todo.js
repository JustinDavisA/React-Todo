import React from 'react';

const ToDo = props => {
  return (
    <div
      style={props.toDo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggleHandler(props.toDo.id)}
    >
      {props.toDo.task}
    </div>
  );
};

export default ToDo;