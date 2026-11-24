import './style.css'

const Blog=()=>{
    return(
        <>
        <div className="mt-5 text-center">
        <h1>Blog</h1>
        </div>
      <div className='container'>
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-danger">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
</div>



        <div className="mx-auto text-center mt-5 blog1-div1">
         <img src="../images/illustration/blog-recent-1.jpg" className="blog-1" id="blog1"/>
         <h1 className="text-danger head-blog">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h1>
         <p className='blog-para1'>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
         <button type="button" class="btn btn-danger">Read More</button>

        </div>



        <div className="blog-3 text-center mt-5 blog1-div3">
         <img src="../images/illustration/blog-recent-2.jpg" className="blog-2 text-center mt-5 blog-1" id="blog2"/>
         <h1 className="text-danger head-blog">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h1>
         <p className='blog-para1'>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
         <button type="button" class="btn btn-danger">Read More</button>

        </div>



        <div className="blog-3 text-center mt-5 blog1-div3">
         <img src="../images/illustration/blog-recent-3.jpg" id="blog3" className="blog-1 text-center mt-5 blog1-div2"/>
         <h1 className="text-danger head-blog">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h1>
         <p className='blog-para1'>neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
         <button type="button" class="btn btn-danger">Read More</button>

        </div>

<div className="container text-center mx-auto d-flex justify-content-center mt-5">
<nav aria-label="mx-auto container">
  <ul className="pagination pagination-lg mx-auto container">
    <li className="page-item active" aria-current="blog1">
     
  </li>
    <li className="blog1"><a className="page-link text-danger" href="#blog1">1</a></li>
    <li className="blog2"><a className="page-link text-danger" href="#blog2">2</a></li>
    <li className="blog3"><a className="page-link text-danger" href="#blog3">3</a></li>
  </ul>
</nav>





 </div>  




























 
            
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
export default Blog;