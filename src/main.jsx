import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './config/apolloConfig.js'
import './styles/colors/colors.css'
import './styles/desktop/desktop-display.css'
import './styles/desktop/desktop-body.css'
import './styles/mobile/android/android-display.css'
import './styles/mobile/android/android-body.css'
import './styles/mobile/ios/iphone-largeTitle.css'
import './styles/mobile/ios/iphone-title1.css'
import './styles/mobile/ios/iphone-title2.css'
import './styles/mobile/ios/iphone-title3.css'
import './styles/mobile/ios/iphone-headline.css'
import './styles/mobile/ios/iphone-body.css'
import './styles/tags/task/task-tag.css'
import './styles/tags/time/time-tag.css'
import 'react-loading-skeleton/dist/skeleton.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <ApolloProvider client={client}>
        <App />
          </ApolloProvider>
      </Router>
  </React.StrictMode>
)
