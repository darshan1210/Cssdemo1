import React from 'react'
import './App.css'
import Header from './shared/component/header'
import Home from './shared/component/home'
import HoemServices from './shared/component/HomeService'
import Services from './shared/component/Services'

function App () {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <HoemServices/>
     <Services/>
    </div>
  )
}

export default App
