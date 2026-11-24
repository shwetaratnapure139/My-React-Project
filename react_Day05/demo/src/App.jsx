import {useState} from "react"
import Component1 from "./Component1"

function App() {
 const existingData=[{'name':'','marks':''}];
 const[data,setData]=useState(existingData);
function mydata(x,y){
  setData(existingData=>[...existingData,{name:x,marks:y}]);
}
  return (
    <>
     <Component1 user={mydata}/>
     <section className='container mt-3'>
      <table className="table table-stripped table-border table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((abc)=>{
            return(
              <tr>
                <td>{abc.name}</td>
                <td>{abc.marks}</td>
              </tr>
            )
          })
        }
      </tbody>
      </table>

     </section>
    </>
  )
}

export default App
