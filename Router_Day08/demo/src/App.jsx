import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"
import Cources from "./Cources"
import Contact from "./Contact"

function App() {
  const image=[{
    image1:'../src/images/image1.jpg'
  }]

  return (
    <>
     <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route path="/" element={<Home item={image}/>}/>
        <Route path="/About"   element={<About/>} />
        <Route path="/Cources" element={<Cources/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
