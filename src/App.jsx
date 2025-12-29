import Home from './components/Home'
import About from './components/About'
import Contact from'./components/Contact'
import Service from './components/Services'
import Use from './components/use'
import { Routes,Route,Link } from 'react-router-dom'
function App() {
  return(
    <>
    <nav>
      <Link to ="/">Home</Link>
      <Link to ="/About">About</Link>
      <Link to ="/Contact">Contact</Link>
      <Link to ="/Services">Services</Link>
      <Link to ="/Use">Use</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Services" element={<Service/>}/>
    <Route path="/Use" element={<Use/>}/>
    </Routes>
    </>

  )
  }

export default App