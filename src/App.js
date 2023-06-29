import React from 'react'
import Link from './components/Link';

export default function App() {
  const users = ['Storm', 'JJ'];

  return (
    <>
      <Link 
      // title="React - A Javascript library for building user interfaces"
      content="Content 1" 
      users={users}
      />

      <Link
        title="Getting Started"
        content="Content 2"
        users={users}
      />

      <Link
        title="Tutorial: Intro to React"
        content="Content 3"
        // users={false}
      />
    </>
  )
}

