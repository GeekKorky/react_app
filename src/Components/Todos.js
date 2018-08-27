import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        // console.log(project);
        return <TodoItem key={todo.title} todo={todo} />;
      });
    }
    return (
      <div className="Todos">
        <strong>
          <h1>Todo List:</h1>
        </strong>
        <br /> {todoItems}
        <br />
      </div>
    );
  }
}

export default Todos;
