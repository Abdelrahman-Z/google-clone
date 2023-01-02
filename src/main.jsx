import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ResaultsContextProvider } from './context/ResaultsContextProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResaultsContextProvider>
        <App />
      </ResaultsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
