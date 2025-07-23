import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Support from './Components/Support/Support'

const App = () => {
  return (
    <>
      <div className="global-background"></div>
      <div className="App">
        <Navbar />
        <Hero />
        <Features />
        <Support />
        <Footer />
      </div>
    </>
  )
}
export default App