import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useCreateSpendingMutation, useGetAllSpendingsQuery } from './generated/graphql-types'

function App() {
  const [count, setCount] = useState(0)
  const {data, loading, error} = useGetAllSpendingsQuery()

  const  [createSpending, {data: createSpendingData, loading: createSpendingLoading, error: createSpendingError}] = useCreateSpendingMutation()

  useEffect(() => {
    createSpending({
      variables: {
        input: {
          spending: {
            amount: 100,
            description: "test",
            date: "2021-01-01"
          }
      },
    }, onCompleted: (data) => {
      console.log("data", data)
    }, onError: (error) => {
      console.log("error", error)
    }
  })
  }, [data, error])


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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
