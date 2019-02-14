import React from 'react';

import ToDo from './ToDo';

const ToDoList = props => {
  return (
    <div>
        {props.toDos.map((toDo, i) => (
            <ToDo 
                toDo={toDo}
                key={i} 
            />
        ))}
    </div>
  );
};

export default ToDoList;