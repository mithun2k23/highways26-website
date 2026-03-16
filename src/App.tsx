import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import PreFooter from './components/PreFooter'

// Pages
import Home from './pages/Home'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Schedule from './pages/Schedule'
import DayEvents from './pages/DayEvents'
import Passes from './pages/Passes'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <LoadingScreen />

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/events/:dayId" element={<DayEvents />} />
            <Route path="/passes" element={<Passes />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <PreFooter />
        <Footer />
      </div>
    </Router>
  )
}

export default App