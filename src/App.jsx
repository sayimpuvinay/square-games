import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boxdiv from './BoxDiv/Boxdiv'
import Snake from './Snake/Snake'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Snake/>
    </>
  )
}

export default App
