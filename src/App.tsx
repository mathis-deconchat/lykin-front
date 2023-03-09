import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useCreateSpendingMutation, useGetAllSpendingsQuery } from './generated/graphql-types'
import AppRouter from './services/router'

function App() {



  return (
   <>
   <AppRouter/>
   </>
  )
}

export default App
