import React, { Component } from "react";
import App from "./App";

class Homenew extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      name: '',
      phone: ''
    }
  }
  changeName = () => {
    this.setState({ name: "Guvi", age: 12, phone: '1212121212' })
  }
  render() {
    console.log("Render method is called!!!!!");
    return (
      <div>
        <Org name="Jack" designation="CTO" tagline="Thoughts makes things"></Org>
        <h2>My name is {this.state.name}</h2>
        <p>My ph no is {this.state.phone}</p>
        <p>My age is {this.state.age}</p>
        <button type="button" onClick={this.changeName}>Change</button>
      </div>
    )
  }
}

class Org extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.designation}</h2>
        <h3>{this.props.tagline}</h3>
      </div>
    )
  }
}

export default Homenew;