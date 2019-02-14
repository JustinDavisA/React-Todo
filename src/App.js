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
      toDos: toDos
    };
  };

  addToDo = e => {
    e.preventDefault();
    const newToDo = {
      task: this.state.toDo,
      id: Date.now(),
      completed: false
    };
    console.log(newToDo);
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    });
  };

  changeToDo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleTodo = id => {
    let toDos = this.state.toDos.slice();
    toDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.completed = !toDo.completed;
        return toDo;
      } else {
        return toDo;
      }
    });
    this.setState({ toDos });
  };

  clearTodos = e => {
    e.preventDefault();
    let toDos = this.state.toDos.filter(toDo => !toDo.completed);
    this.setState({ toDos });
};

  render() {
    return (
      <div className="to-do-app">
        <h2>Welcome to your To do List!</h2>
        <div className="to-do-list">
          <ToDoList 
            toggleHandler={this.toggleTodo}
            toDos={this.state.toDos}
          />
        </div>
        <div className="to-do-form">
          <ToDoForm
            clearHandler={this.clearTodos}
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
