import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useClient } from './lib/client'
import { ElizaService } from '$/eliza_connect'
import './App.css'

function App() {
  const client = useClient(ElizaService)

  const [count, setCount] = useState(0)
  const [sentence, setSentence] = useState('')

  const fetchSentence = async () => {
    const res = await client.say({ sentence: 'I feel happy.' })
    setSentence(res.sentence)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className="ml" onClick={fetchSentence}>
          fetch sentence
        </button>
        <p>sentence: {sentence}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
