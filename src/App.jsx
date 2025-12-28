import Home from './components/Home';
import About from './components/About';
import Contact from'./components/contact';
import Service from './components/Service';
import { Routes,Route,Link } from 'react-router-dom';
function App() {
  return(
    <>
    <nav>
      <Link to ="/">Home</Link>|{" "}
      <Link to ="/About">About</Link>|{" "}
      <Link to ="/Contact">Contact</Link>|{" "}
      <Link to ="/Service">Service</Link>|{" "}
    </nav>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" elements={<About/>}/>
    <Route path="/Contact" elements={<Contact/>}/>
    <Route path="/Service" elements={<Service/>}/>
    
    </Routes>
    </>

  )
  }

export default App