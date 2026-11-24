import Navigation from "./Navigation"
import Hero_section from "./Hero_section"
// import img11 from './images/illlustration/onee.png';
import './style.css'
import About from "./About"
import Project from "./Project"
import Service from "./Service"
import Component1 from "./Component1"
import Blog from "./Blog"
import Form1 from "./Form1"
import Footer from "./Footer"












function App() {





 const navi=[
 
  {anchor:"Home"},
  {anchor:"About"},
  {anchor:"Projects"},
  {anchor:"Services"},
  {anchor:"Blog"},
  {anchor:"Pages"},
  {anchor:"Contact"},
 




 ]

 const one=[{
  head:"WE DESIGN OUR SPACE",
  para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
 btn1:"SEE OUR PROJECT"
 }]

 const two=[{
  head:"Interior",
  image:"../images/illlustration/image1.png",
  caption:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse."
 },
 {
  head:"Exterior",
  image:"../images/illlustration/2(1).png",
  caption:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse."
 },
 {
  head:"Bridge",
  image:"../images/illlustration/3 (3).png",
  caption:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse."
 }

]
const three = [
  {
  image:"../images/illlustration/1(4).png",
  head:"Abahoni Building",
  para:"Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua quis ipsum suspendisse.",
  btn2:"VIEW MORE"
}]
// const three[{image:"src/images/illlustration/1(4).png"}];

const four=[{
  para:"Dhaka,Bangladesh",
  igg:'../images/illlustration/onee.png',
  head:"MR Kholifa Tower",
  para2:"Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua quis ipsum suspendisse.",
  btn3:"VIEW MORE"
}]
const five=[{
  para1:"DUBAI, UAE",
  image:'../images/illlustration/building.png',
  head:'Galoni Plan & Design',
  para2:"Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua quis ipsum suspendisse.",
  btn4:"VIEW MORE"
}]
const six=[{
  para1:"DUBAI, UAE",
  image:'../images/illlustration/2 (4).png',
  head:'Galoni Plan & Design',
  para2:"Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua quis ipsum suspendisse.",
  btn5:"VIEW MORE"
}]

const seven=[{
  para1:"CONTACT US",
  head:"Send your message",
  image:"../images/illlustration/mesege.png",
  btn6:"Submit"
}]

const eight=[{
 
  image:"../images/illlustration/footer-logo (3).png",
  head:"Do youn have any project or Query ?",
  btnfoot:"CONTACT US",
  para1:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  // para2:"Navigation",
  // para3:"Services",
  icon1:"../images/icons/facebook.png",
  icon2:"../images/icons/instagram.png",
  icon3:"../images/icons/twitter.png",
  list1:"Home",
  list2:"About",
  list3:"Project",
  list4:"Services",
  list5:"Blog"



 
}
]












 
  return (
    <>
  
 
  

  
   <Navigation data={navi}/>
   <Hero_section main_sec={one}/>

  <About props_about={two}/>
    <Project project={three}/>
  <Service service={four}/>
  <Component1 serv={five}/>
  <Blog blog={six}/>
  <Form1 form={seven}/>
  <Footer foot={eight} />
   


   </>

)
}
export default App
