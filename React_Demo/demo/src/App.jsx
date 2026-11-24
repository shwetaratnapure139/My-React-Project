// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  // const [count, setCount] = useState(0)
const var1=["Shweta"];
const image_data=[{
  head:"ImageDemo",
  image:'./src/images/illustration/nature.jpg',
  caption:'This is my image taken using props'

}]
  return (
    <>
   <ImageDemo data={image_data}/>
    </>
  )
}

export default App
