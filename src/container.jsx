import React from "react";
import Todolist from "./todolist";
import Inputtodo from "./inputtodo";
import "./container.css";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: false
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }));
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return id !== todo.id;
        })
      ]
    });
  };
  addTodoItem = (title) => {
    const newtodo = {
      id: 4,
      title: "title",
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newtodo]
    });
  };

  render() {
    return (
      <>
        <h1 className="h1-tag"> TODO APP</h1>
        <Inputtodo className="i" addTodoItem={this.addTodoItem} />
        <Todolist
          className="todolist-tag"
          lists={this.state.todos}
          handleChange={this.handleChange}
          deleteTodo={this.deleteTodo}
        />
      </>
    );
  }
}
export default TodoContainer;
