import React from 'react'
import HomePage from './Pages/Home/HomePage'
import Header from './components/Header/Header'
import './App.css'
import SandBox from './Pages/Sandbox'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <HomePage />
      <SandBox />
    </div>
  )
}

export default App
