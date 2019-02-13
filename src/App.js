import React from 'react';

import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const toDos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: toDos,
      task: '',
      id: '',
      completed: ''
    };
  }

  addToDo = e => {
    e.preventDefault();
    const newToDo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      toDos: [...this.state.toDos, newToDo],
      task: '',
      id: '',
      completed: ''
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.task]: e.target.value,
      [e.target.id]: e.target.value,
      [e.target.completed]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your To do List!</h2>
        <div className="to-do-list">
          {this.state.toDos.map((toDoFromMap, i) => (
            <ToDo key={i} toDo={toDoFromMap} />
          ))}
        </div>
        <ToDoForm
          addToDo={this.addToDo}
          changeHandler={this.changeHandler}
          task={this.task}
          id={this.id}
          completed={this.completed}
        />
      </div>
    );
  }
}

export default App;
