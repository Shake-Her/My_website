import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav';
import Contact from './Components/Contact/Contact'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import Experiecne from './Components/Experience/Experience';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiecne />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App