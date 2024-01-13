import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      console.log(response)
      setJokes(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  })
  
  return (
    <>
    <h1>Jokes : {jokes.length}</h1>

    {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <h3>{joke.content}</h3>
        </div>
      ))
    }
    </>
  )
}

export default App
