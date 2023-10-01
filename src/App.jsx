import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Philosophy from './Philosophy'
import Projects from './Projects'
import Services from './Services'
import Whyus from './Whyus'

function App() {
  

  return (
    <div className="App">
      <Home/>
      <Services/>
      <Projects/>
      <Whyus />
      <Contact />
      <Philosophy />
      <Footer />
    </div>
  )
}

export default App
