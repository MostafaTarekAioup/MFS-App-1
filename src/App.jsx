import './App.css'
import Hello from './Components/Hello'

import { useOpenModule } from 'appHouse/appStore'
import TempComp from 'appHouse/TempComp'

function App() {
  const [isOpen] = useOpenModule()
  return (
    <>
      <h1>app 1 after build</h1>
      {isOpen && <Hello />}
      <TempComp />
    </>
  )
}

export default App
