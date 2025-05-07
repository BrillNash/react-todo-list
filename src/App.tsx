import { useState } from 'react'
import './App.css'
import { TodoWrapper } from './components/TodoWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <TodoWrapper/>
      </div>
    </>
  )
}

export default App
