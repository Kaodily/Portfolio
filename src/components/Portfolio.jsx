import React from 'react'
import Header from './utils/header/Header'
import About from './home/about/About'
import Services from './home/service/Services'
import Projects from './home/projects/Projects'

const Portfolio = () => {
  return (
    <div>
        <Header />
        <About />
        <Services />
        <Projects />
    </div>
  )
}

export default Portfolio