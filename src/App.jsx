
import './App.css'
import AboutUs from './components/AboutUs'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Offering from './components/Offering'

function App() {
  return (
  
      <>
  <Header />

  <main className="pt-20">
    <section id="home">
      <Hero />
    </section>

    <section id="studio">
      <Featured />
    </section>

    <section id="services">
      <Offering />
    </section>

    <section id="about">
      <AboutUs />
    </section>

    <section id="contact">
      <Footer />
    </section>
  </main>

    </>
  )
}

export default App