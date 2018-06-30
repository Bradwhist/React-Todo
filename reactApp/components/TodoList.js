import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //console.log('TodoList tclick', this.props.todoTClick);
    //console.log('todolist xclick', this.props.todoXClick);
    return (
      <ul>
        {this.props.todos.map((task, i) => <Todo taskText={task.taskText} key={i} keyIndex={i} completed={task.completed} tClick = {() => this.props.todoTClick(i)} xClick = {() => this.props.todoXClick(i)}  />)}
      </ul>
    );
  }
}

export default TodoList;
