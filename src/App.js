import React from 'react';

import ToDoForm from './components/TodoComponents/ToDoForm';
import ToDoList from './components/TodoComponents/ToDoList';

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
      toDo: ''
    };
  };

  addToDo = e => {
    e.preventDefault();
    const newToDo = {
      toDo: this.state.toDo
    };
    this.setState({
      toDos: [...this.state.toDos, newToDo],
      toDo: ''
    });
  };

  changeToDo = e => {
    this.setState({
      [e.target.toDo]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your To do List!</h2>
        <div className="to-do-list">
          <ToDoList 
            toDos={this.state.toDos}
          />
        </div>
        <div className="to-do-form">
          <ToDoForm
            toDo={this.state.toDo}
            addHandler={this.addToDo}
            changeHandler={this.changeToDo}
          />
        </div>
      </div>
    );
  };
}

export default App;
