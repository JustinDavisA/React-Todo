import React from 'react';

import ToDo from './ToDo';

const ToDoList = props => {
  return (
    <div>
        {props.toDos.map(toDo => (
            <ToDo 
                toDo={toDo}
                key={toDo.id} 
            />
        ))}
    </div>
  );
};

export default ToDoList;