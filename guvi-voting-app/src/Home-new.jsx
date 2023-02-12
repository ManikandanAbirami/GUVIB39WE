import React, { Component } from "react";
import App from "./App";

class Homenew extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      phone: ''
    }
  }
  render() {
    return (
      <div>
        <Org name="Jack" designation="CTO" tagline="Thoughts makes things"></Org>
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