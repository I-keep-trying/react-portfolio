import React, { useState } from 'react'
import { C } from './services/stringDiff'

const stringArray = [
  { word: 'bassoons', score: 371 },
  { word: 'barroon', score: 371 },
  { word: 'babboon', score: 371 },
]

const App = () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const input = '123445263v362544321'
  const bLines = [{ word: 'saippuakivikauppias' }]

  const input1 = 'ba1122n'

  const useC = () => {
    stringArray.forEach((obj) => {
      const resC = C(input1, obj.word)
      console.log('resC.diff1', resC, 'obj.word', obj.word)
      if (resC.error) {
        console.log('obj.word with error', obj.word)
        setError(`Error: ${resC.error}; Param: ${obj.word}`)
      }
      if (resC.match === false) {
        console.log('no match')
      } else {
        console.log(`${obj.word} is matched by input ${input}`)
        setResults((state) => [...state, ...resC.results])
      }
    })
  }

  return (
    <div className="App">
      {results.map((result) => (
        <div>{result} </div>
      ))}
      <br />
      {JSON.stringify(error)}
      <br />
      <button onClick={useC}>useC</button>
    </div>
  )
}

export default App
