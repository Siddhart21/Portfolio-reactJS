import React from 'react'
import Education from './components/Education';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Contact from './components/Contact';
import Header from './components/Header';

const Body = () => {
  return (
    <div>
      <Header/>
      <Education/>
      <Skills/>
      <Exp/>
      <Contact/>
    </div>
  )
}

export default Body