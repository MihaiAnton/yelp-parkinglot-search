import { BrowserRouter } from 'react-router-dom'
import './App.css'

import MainBlock from './containers/MainBlock'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainBlock />
      </div>
    </BrowserRouter>
  )
}

export default App
