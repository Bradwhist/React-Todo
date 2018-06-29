import React from 'react';
import ReactDOM from 'react-dom';


let dummyData = ([{ taskText: 'probes', completed: false },
 { taskText: 'pylons', completed: true },
  { taskText: 'profit', completed: false }])

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ul>
        {dummyData.map((task) => <Todo taskText={task.taskText} completed={task.completed} />)}
      </ul>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <li>
        <form>
          <p>{ this.props.completed ? <strike>{this.props.taskText}</strike> : this.props.taskText }</p>
          <button type="button">X</button>
        </form>
     </li>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Todo..." required/>
          <button type="submit">Add Todo</button>
        </form>
        <TodoList/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'))
