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

  addTodo(e) {
    e.preventDefault();
    console.log('addTodo', e);
    dummyData.push({ taskText: this.state.newTask, completed: false});
    this.setState({
      todos: dummyData,
    })
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value,
    });
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
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
