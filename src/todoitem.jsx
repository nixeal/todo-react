import React from "react";
import "./item.css";

class Todoitem extends React.Component {
  render() {
    return (
      <>
        <div className="item">
          <li className="li-tag" key={this.props.list.id}>
            {" "}
            <input
              className="check-tag"
              type="checkbox"
              checked={this.props.list.completed}
              onChange={() => this.props.handleChange(this.props.list.id)}
            ></input>{" "}
            <button
              className="btn-tag"
              onClick={() => this.props.deleteTodo(this.props.list.id)}
            >
              Delete
            </button>
            {this.props.list.title}
          </li>
        </div>
      </>
    );
  }
}
export default Todoitem;
