import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Expense } from './context/expense.jsx'
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeechProvider
      appId= {import.meta.env.VITE_API_KEY}
      debug
      logSegments
    >
    <Expense>
     <App />
    </Expense>
    </SpeechProvider>
  </React.StrictMode>,
)
