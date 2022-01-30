import React from "react";
import Todoitem from "./todoitem";

class Todolist extends React.Component {
  render() {
    return (
      <>
        {this.props.lists.map((list) => {
          return (
            <>
              <Todoitem
                list={list}
                handleChange={this.props.handleChange}
                deleteTodo={this.props.deleteTodo}
              />
            </>
          );
        })}
      </>
    );
  }
}
export default Todolist;
