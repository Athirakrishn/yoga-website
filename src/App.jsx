import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
 <LandingPage/>
 <Footer/>
    </>
  )
}

export default App
