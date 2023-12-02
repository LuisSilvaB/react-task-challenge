import RoutesComponent from './routes/routes'
import {Outlet} from 'react-router-dom'
import { AppContextProvider } from './context/context'

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

function App() {
  return (
    // <ErrorBundary>
    <AppContextProvider>
      <RoutesComponent />
      <Outlet/>
      
    </AppContextProvider>
    // </ErrorBundary>
  )
}

export default App
