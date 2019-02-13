import React from 'react';

const toDos = [
  {
    text: 'Take Out Garbage'
  }
];

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: toDos,
      text: ''
    }
  }

  addToDo = e => {
    e.preventDefault();
    const newToDo = {
      text: this.addToDo.state.text
    };

    this.setState({
      toDos: [...this.state.toDos, newToDo],
      text: ''
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <
      </div>
    );
  }
}

export default App;
