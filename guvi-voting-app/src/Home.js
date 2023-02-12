import React from 'react';

export default function Home() {
  return (
    <div>
      <Comment time={(new Date()).toString()}>
        <h1>Hello Everyone!!</h1>
        <p>This is a new comment!</p>
      </Comment>
      <Recomment name="GUVIB39-WE" time={(new Date()).toString()}>
        <h1>This is Recomment section!!</h1>
      </Recomment>
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
    <section>
      {props.children}
      <p>{props.name} commented at {props.time}</p>

    </section>
  )
}