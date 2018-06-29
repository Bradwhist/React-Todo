import React from 'react';


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

export default Todo;
