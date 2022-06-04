import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ToastContainer} from './ToastContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer defaultMessage="text Toast">
      <App />
    </ToastContainer>
  </React.StrictMode>,
)
