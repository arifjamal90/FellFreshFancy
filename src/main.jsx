import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContex from './Component/Contenxapi/MyContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyContex>
  <App />
  </MyContex>
  
  </React.StrictMode>,
)
