import RoutesComponent from './routes/routes'
import { AppContextProvider } from './context/context'

function App() {
  return (
    <AppContextProvider>
      <RoutesComponent />      
    </AppContextProvider>
  )
}

export default App
