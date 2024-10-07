import './App.css'
import Explore from './Components/Explore'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Poems from './Components/Poems'
import Quotes from './Components/Quotes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Subscribe from './Components/Subscribe'
import About from './Components/About'

function App() {
  return (
    <Router>
      <>
        <Hero />
        <Routes>
          <Route path="/" element={<Poems />} />
          <Route path="/explore/:poemId" element={<Explore />} />
        </Routes>
        <About/>

        <Quotes />
         <Subscribe/>
        <Footer />
      </>
    </Router>
  )
}

export default App
