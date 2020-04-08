import React, { Component } from "react";
import { v1 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/ToDoList";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Wake Up",
      },
      {
        id: 2,
        title: "Make Breakfast",
      },
    ],
    id: v1(),
    editItem: false,
  };
  handleChange = (e) => {
    console.log("Test");
  };
  handleSubmit = (e) => {
    console.log("Test2");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleDelete = (id) => {
    console.log(id);
  };
  handleEdit = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>

              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.handleEdit}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
