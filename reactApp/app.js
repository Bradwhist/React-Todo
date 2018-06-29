import React from 'react';
import ReactDOM from 'react-dom';


let dummyData = (['probes', 'pylons', 'profit'])

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ul>
        {dummyData.map((task) => <Todo task={task} />)}
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
        <p>{this.props.task}</p>
        <button type="button">X</button>
     </li>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'))
