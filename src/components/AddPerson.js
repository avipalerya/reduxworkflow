import React, { Component } from "react";

export default class AddPerson extends Component {
  state = {
    name: "",
    age: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          value={this.state.name}
        ></input>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => {
            this.setState({ age: e.target.value });
          }}
          value={this.state.age}
        ></input>
        <button
          onClick={() => {
            this.props.personAdded(this.state.name, this.state.age);
          }}
        >
          Add Person
        </button>
      </div>
    );
  }
}
