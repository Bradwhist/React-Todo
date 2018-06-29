import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((task, i) => <Todo taskText={task.taskText} key={i} completed={task.completed} />)}
      </ul>
    );
  }
}

export default TodoList;
