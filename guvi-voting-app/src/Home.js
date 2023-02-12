import React from 'react';

export default function Home() {
  return (
    <Comment username="Manikandan" time={(new Date()).toString()}>
      <h1>Hello Everyone!!</h1>
      <p>This is a new comment!</p>
    </Comment>
  )
}

function Comment({ username, time, children }) {
  return (
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  )
}