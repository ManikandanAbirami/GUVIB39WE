import React, { Component } from "react";
import App from "./App";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          Phonebook
        </div>
        <button> Add </button>
        <div>
          <span>Name</span> <br />
          <span>Phone</span>
        </div>
        <App></App>
      </div>
    )
  }
}

export default Home;