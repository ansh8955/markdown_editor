import { useState } from 'react'
import './App.css'
import MarkdownReact from './Markdown/Markdown';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MarkdownReact/>
    </>
  )
}

export default App
