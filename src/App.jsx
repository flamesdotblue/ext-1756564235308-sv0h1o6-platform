import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Characters from './components/Characters.jsx'
import Trailer from './components/Trailer.jsx'
import Seasons from './components/Seasons.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <NavBar />
      <Hero />
      <main>
        <Characters />
        <Trailer />
        <Seasons />
      </main>
      <Footer />
    </div>
  )
}
