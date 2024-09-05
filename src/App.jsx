import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { How } from './components/How'
import { See } from './components/See'

function App() {

  return (
    <div className="w-full h-full bg-[#080E16] flex flex-col">
      <Header/>
      <Hero/>
      <About/>
      <How/>
      <See />
    </div>
  )
}

export default App
