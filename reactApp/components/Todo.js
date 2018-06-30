import React from 'react';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    //console.log('todo', this.props.xClick);
    return (
      <li key={this.props.keyIndex}>
        <form>
          <p>{ this.props.completed ? <strike>{this.props.taskText}</strike> : this.props.taskText }</p>
          <button type="button" onClick = {() => this.props.tClick()}>{ this.props.completed ? 'todo on': 'todo off' }</button>
          <button type="button" onClick = {() => this.props.xClick()}>X</button>
        </form>
     </li>
    )
  }
}

export default Todo;
