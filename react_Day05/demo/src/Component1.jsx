import { useState } from "react";

const Component1 = (props) =>{

    const[name,setName]=useState();
    const[marks,setMarks]=useState();
    const[valid,setValid]=useState(true);

    function function1(x){
        setName(x.target.value);
    }

    function function2(x){
        setMarks(x.target.value);
    }

    function function3(){
        // props.user(name,marks);
        if(!name || !marks){
            setValid(false);
        }
        else{
            props.user(name,marks);
        }   
    }


    return(
        <>
            <section className="container mt-3">
            <div>
                <input type="text" placeholder="Enter your name" onChange={function1} className="form-control mt-2" style={{border:valid==false?'1px solid red':'1px solid green'}}/>
            </div>
            <div>
                <input type="text" placeholder="Enter your marks" onChange={function2} className="form-control mt-2" style={{border:valid==false?'1px solid red':'1px solid green'}}/>
            </div>
            <button type="button" onClick={function3} className="btn btn-success mt-2">Submit</button>
            </section>
        </>
    )
}

export default Component1;