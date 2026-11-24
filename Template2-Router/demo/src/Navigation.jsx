import './style.css'
import {Link} from "react-router-dom";

const Navigation=()=>{
    return(
        <>
      
<nav className=" fs-5 navigation-bar mt-2  ">
    <div className="col-lg-12">
    <div className="d-lg-none d-flex justify-content-around align-items-center">
      <h2 className=" fw-bold">
            SAILOR
           </h2>
          
           <img src="public/images/icons/menu (1).png" data-bs-toggle="offcanvas" data-bs-target="#sidebar"/>
           <div class="offcanvas offcanvas-start w-75"  id="sidebar" width="300px">
       <div class="offcanvas-header">
   
   
  </div>
  <div className="offcanvas-body">
  <ul className="list-unstyled text-center">
  <li>
                    <Link to="/" className="text-decoration-none text-secondary nav1">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="text-decoration-none text-secondary nav1">About</Link>
                </li>
                <li>
                    <Link to="/Services" className="text-decoration-none text-secondary nav1">Services</Link>
                </li>
                <li>
                    <Link to="/Blog" className="text-decoration-none text-secondary nav1">Blog</Link>
                </li>
                <li>
                    <Link to="/Contact" className="text-decoration-none text-secondary nav1">Contact</Link>

                </li>
                <div className="container">
                <button type="button" className="btn btn-danger ">Get Started</button>
                </div>
  </ul>
  </div>
</div>
           </div>

           

    

     
            <ul className="d-lg-flex w-75 justify-content-between mx-auto list-unstyled align-items-center d-none ">
            <h2 className="d-lg-inline ">
            SAILOR
           </h2>
                <li>
                    <Link to="/" className="text-decoration-none text-secondary nav1">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="text-decoration-none text-secondary nav1">About</Link>
                </li>
                <li>
                    <Link to="/Services" className="text-decoration-none text-secondary nav1">Services</Link>
                </li>
                <li>
                    <Link to="/Blog" className="text-decoration-none text-secondary nav1">Blog</Link>
                </li>
                <li>
                    <Link to="/Contact" className="text-decoration-none text-secondary nav1">Contact</Link>

                </li>
                <button type="button" className="btn btn-danger ">Get Started</button>
              
            </ul>
           
            </div>
       

        </nav>


       
        
        </>
    )
}



export default Navigation;