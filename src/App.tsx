import { useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ height: '100%' }}>
     <Dashboard />
    </div>
  )
}

export default App
