import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  if (true) {
    return (
      <>
        <h1>Yes, your internet is working!</h1>
      </>
    )
  } else {
    return (
      <>
        <h1>Yes, your internet is not working!</h1>
      </>
    )
  }

}

export default App
