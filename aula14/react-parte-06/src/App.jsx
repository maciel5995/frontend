
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
