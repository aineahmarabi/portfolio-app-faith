import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Service'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  )
}
