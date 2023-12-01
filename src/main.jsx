import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './config/apolloConfig.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <ApolloProvider client={client}>
        <App />
          </ApolloProvider>
      </Router>
  </React.StrictMode>
)
