import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import About from "./About"
import Services from "./Services"
import Blog from "./Blog"
import Contact from "./Contact"
import Home from "./Home"


import './style.css'


const image=[
  {
    image1:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24196.916755355833!2d-74.010143!3d40.704485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1721318619497!5m2!1sen!2sus"
  }
]







function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navigation/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Services" element={<Services/>} />
    <Route path="/Blog" element={<Blog/>} />
    <Route path="/Contact" element={<Contact contact={image}/>}/>

    
   
   

    


       
  
     </Routes>
     </BrowserRouter>

   

    </>
  )
}

export default App
