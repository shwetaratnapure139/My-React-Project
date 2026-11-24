
import './style.css'
const Contact=(props)=>{
    const data=props.contact
    return(
      <>
      <div className="mt-5 container">
      <h1>Contact</h1>
      </div>
      <section className="section-contact">
    

<nav aria-label="breadcrumb">
  <ol className="breadcrumb container">
    <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-danger">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>
        {
            data.map((x)=>{
                return(
                    <>
                    <iframe src={x.image1} width="600" height="450"/>
                      
                    











                      <section className="sec2-contact d-lg-flex container justify-content-center mt-5 ">
        <div className="">
          <div className="d-lg-flex justify-content-center gap-5">
            
        <div className="mb-3 text-center">
          <div>
                        <span className="h4">LOCATION</span>
                        <i class="bi bi-geo-alt"></i>

                        <p>A108 Adam Street, New York, NY 535022</p>
                       </div>
                       <div>
                        <span className="h4">Email</span>
                        <i class="bi bi-envelope"></i>
                        <p>info@example.com</p>
                       </div>

                       <div>
                       <span className="h4">Call</span>
                       <i class="bi bi-phone"></i>
                        <p>+1 5589 55488 55s</p>
                     </div>
                     </div>
                     </div>
                 </div>



                 <div>

              <div className="container">
             <input type="email" className="form-control contact-input1"  placeholder="Your Name"/>
      </div>
      <div className="mt-3 text-center container">

<input type="email" className="form-control  contact-input2"  placeholder="Your Email"/>
</div>
<div className="mt-3 text-center container">

          <input type="email" className="form-control  contact-input3"  placeholder="Subject"/>
              </div>
                 <div className="mt-3 text-center container">
  
              <textarea className="form-control texarea-contact" rows="3"></textarea>
</div>
        
        <div className="mt-3 text-center container">
        <button type="button" class="btn btn-danger btn-lg  rounded-0">Submit</button>
        </div>
        </div>


      </section>

     






                    </>
                )
            })
        }
      

              
            



      </section>
      <section className=" mt-5 ">
<footer id="footer-sec mt-5">
    <div className="bg-secondary bg-opacity-25 py-5">
        <div className="container py-3">
            <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-12">
                    <h5 className="pb-3"><i className="fa-solid fa-user-group pe-1"></i> About us</h5>
                    <span className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content.</span>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12">
                    <h5 className="pb-3"><i className="fa-solid fa-link pe-1"></i> Important links</h5>
                    <ul className='list-unstyled'>
                        <li><a href="#" className="text-decoration-none link-secondary">About us</a></li>
                        <li><a href="#" className="text-decoration-none link-secondary">Privacy policy</a></li>
                        <li><a href="#" className="text-decoration-none link-secondary">Terms of services</a></li>
                    </ul>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-12">
                    <h5 className="pb-3"><i class="fa-solid fa-location-dot pe-1"></i> Our location</h5>
                    <span className="text-secondary">
                        Milannagar bazar<br/>
                        Tamluk, East Medinipore, West Bengal<br/>
                        721627, India<br/>
                    </span>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <h5 className="pb-3"><i class="fa-solid fa-paper-plane pe-1"></i> Stay updated</h5>
                    <div class="input-group mb-3">
  <span className="input-group-text input1 bg-danger text-light" id="inputGroup-sizing-default">Subscribe</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-dark py-3">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a className="btn btn-outline-light" href="#"><i className="bi bi-facebook text-danger fs-4"></i></a></li>
                        <li className="list-inline-item"><a className="btn btn-outline-light" href="#"><i className= "bi bi-youtube text-danger fs-4"></i></a></li>
                        <li className="list-inline-item"><a className="btn btn-outline-light" href="#"><i className="bi bi-twitter text-danger fs-4"></i></a></li>
                        <li className="list-inline-item"><a className="btn btn-outline-light" href="#"><i className="bi bi-linkedin text-danger fs-4"></i></a></li>
                        <li className="list-inline-item"><a className="btn btn-outline-light" href="#"><i className="bi bi-instagram text-danger fs-4"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-6 col-sm-12"><span className="text-light pt-1 float-md-end  float-sm-start">This Template made by @Shweta Ratnapure</span></div>
            </div>
        </div>
    </div>
</footer>
            
        </section>


     
     </>
    
  
    )
}
export default Contact;