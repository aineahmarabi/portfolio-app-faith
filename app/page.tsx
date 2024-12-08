import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Service'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}
