import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Componant/introduction/Body'
import Help from './Componant/help/Help'
import Experience from './Componant/Work/Experience'
import Projects from './Componant/Project/Projects'

function App() {


  return (
    <>
     
   <Body/>
   <Help/>
   <Experience/>
   <Projects/>
    </>
  )
}

export default App
