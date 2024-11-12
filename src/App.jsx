import './App.css'
import Hello from './Components/Hello'

import { useOpenModule } from 'appHouse/appStore'
import TempComp from 'appHouse/TempComp'

function App() {
  const [isOpen] = useOpenModule()
  console.log('🚀 ~ App ~ isOpen:', isOpen)
  return (
    <>
      <h1>app 1</h1>
      {isOpen && <Hello />}
      <TempComp />
    </>
  )
}

export default App
