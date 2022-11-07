import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { createContext } from 'react'
import { useState } from 'react'
import './index.css'

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <body id={theme}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </body>
    </ThemeContext.Provider>
  )
}

export default App