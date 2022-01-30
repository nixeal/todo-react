import React from "react";
import "./inputodo.css";
class Inputtodo extends React.Component {
  state = {
    title: ""
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.title.trim()) {
      this.props.addTodoItem(this.state.title);
      this.setState({
        title: ""
      });
    } else {
      alert("Please write item");
    }
  };

  render() {
    console.log(this.state.title);
    console.log("after render");
    return (
      <>
        <div className="form">
          <form classname="inputtodo-tag" onSubmit={this.handleSubmit}>
            <input
              className="input-tag"
              type="text"
              value={this.state.title}
              placeholder="enter todo"
              onChange={this.onChange}
            ></input>
            <button className="button-tag">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default Inputtodo;
