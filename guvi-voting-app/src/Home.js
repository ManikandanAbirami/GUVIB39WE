import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [val, setVal] = useState("Hi");
  const click = () => {
    alert(val);
  }
  const change = event => {
    console.log(event.target.value);
    setVal(event.target.value);
  }
  return (
    <div>
      <Comment time={(new Date()).toString()}>
        <h1>Hello Everyone!!</h1>
        <p>This is a new comment!</p>
      </Comment>
      <Recomment name="GUVIB39-WE" time={(new Date()).toString()}>
        <h1>This is Recomment section!!</h1>
      </Recomment>
      Value 1: <input onChange={change} value={val}></input> <br />
      Value 2: <input onChange={change} value={val}></input> <br />
      <button onClick={click}>Add</button> <br />
      Result: <input onChange={change} value={val}></input>
    </div>
  )
}

function Comment({ username = "Hello!!! ", time, children }) {
  return (
    <section>
      {children}
      <p>{username} commented at {time}</p>

    </section>
  )
}

function Recomment(props) {
  return (
    <div>
      {props.children}
      <p>{props.name} commented at {props.time}</p>

    </div>
  )
}