import React from 'react';
import TodoList from './TodoList';

let dummyData = ([{ taskText: 'probes', completed: false },
 { taskText: 'pylons', completed: true },
  { taskText: 'profit', completed: false }])

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTask: ''
    }
  }

// METHODS
  addTodo(e) {
    e.preventDefault();
    console.log('addTodo', e);
    var newTodos = this.state.todos.slice();
    newTodos.push({ taskText: this.state.newTask, completed: false});
    this.setState({
      todos: newTodos,
    })
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value,
    });
  }

  removeTodo(index) {
    //console.log('remove todo',this);

    var newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    })
  }

  toggleTodo(index) {

    var todoT = this.state.todos.slice();
      //console.log(index);
    if (todoT[index].completed){
      todoT[index].completed = false;
    } else {
      todoT[index].completed = true;
    }
    this.setState({
      todos: todoT,
    })
  }

  componentDidMount() {
    //console.log(dummyData);
    this.setState({
      todos: dummyData,
    })

  }

  render() {

    return (
      <div>
      <form>
        <input type="text" value={this.state.newTask} onChange = {(e)=> this.handleChange(e)} />
        <input type="submit" value="Submit" onClick = {(e) => {
            this.addTodo(e)}}/>
          </form>
        <TodoList todos={this.state.todos} todoXClick= {(i) => this.removeTodo(i)} todoTClick = {(i) => this.toggleTodo(i)} />
      </div>
    )
  }
}

export default TodoApp;
