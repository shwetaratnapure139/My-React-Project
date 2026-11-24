import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './style.css'







const Services=()=>{
    return(
        <>
        <div className='container'>
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb text-center">
    <li class="breadcrumb-item"><a href="#"  className='text-decoration-none text-danger'>Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Services</li>
  </ol>
</nav>
</div>
        <div className='text-center'>
        <button type="button" class="btn btn-danger text-light m-3">All</button>
        <button type="button" class="btn btn-danger text-light m-3">APP</button>
        <button type="button" class="btn btn-danger text-light m-3">CARD</button>
        <button type="button" class="btn btn-danger text-light m-3">WEB</button>
        </div>

        <section className='services-sec2 d-lg-none'>
          <div className='container'>
            <div className='mx-auto text-center'>
             <img src='../images/illustration/portfolio-1.jpg'  width="80%" className='container'/>
             </div>

             <div className='mx-auto text-center pt-3'>
             <img src='../images/illustration/portfolio-2.jpg'  width="80%" className='container'/>
             </div>
             </div>

             <div className='mx-auto text-center pt-3'>
             <img src='../images/illustration/portfolio-3.jpg'  width="80%" className='container'/>
             </div>

             <div className='mx-auto text-center pt-3'>
             <img src='../images/illustration/portfolio-4.jpg'  width="80%" className='container'/>
             </div>

             <div className='mx-auto text-center pt-3'>
             <img src='../images/illustration/portfolio-5.jpg'  width="80%" className='container'/>
             </div>

             <div className='mx-auto text-center pt-3'>
             <img src='../images/illustration/portfolio-6.jpg'  width="80%" className='container'/>
             </div>
            
                </section>



        <div className='container mx-auto text-center w-75 pt-4 d-none d-lg-flex d-md-flex '>
        <ImageList  cols={3} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>

<section className='section2-serv'>
  <div className='container'>
    <div className='row'>
      <div className='text-center mt-5'>
        <p className='text-secondary'>FEATURES</p>
      </div>
      <div className='d-lg-flex gap-4'>
     <div>
      <ul className='list-unstyled text-center'>
      <li>Modi sit </li>
      <li>Unde sec</li>
      <li>Pariature vel</li>
      <li>Nostrum qui quasi</li>
      <li>lusto ut expedita aut</li>
      </ul>
      
    </div>
    <div className='text-center'>
      <h4>QUI LAUDANTIUM CONSEQUATUR LABORUM SIT QUI AD SAPIENTE DILA PARDE SONATA RAQER A VIDENA MARETA PAULONA MARKA
          EA IPSUM VOLUPTATEM CONSEQUATUR QUIS EST. ILLUM ERROR ULLAM OMNIS QUIA ET REICIENDIS SUNT SUNT EST. NON ALIQUID REPELLENDUS ITAQUE ACCUSAMUS EIUS ET VELIT IPSA VOLUPTATES. OPTIO NESCIUNT EAQUE BEATAE ACCUSAMUS LERODE PAKTO MADIRNA DESERA VAFLE DE NIDERAN PAL
          CHECK OUR FEATURES</h4>
    </div>
    <div>
      <img src="../images/illustration/features-2.png" className='img-serv-sec2'/>
    </div>
    </div>
    </div>

  </div>




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


const itemData = [
    {
      img: '../images/illustration/portfolio-1.jpg',
      height:"500",
    
    },
    {
      img: '../images/illustration/portfolio-2.jpg',
       height:"500",
    },
    {
      img: '../images/illustration/portfolio-3.jpg',
      height:"500",
    },
    {
      img: '../images/illustration/portfolio-4.jpg',
      height:"500",
    },
    {
      img: '../images/illustration/portfolio-5.jpg',
      height:"500",
    },
    {
      img: '../images/illustration/portfolio-6.jpg',
      height:"500",
    },
    {
      img: '../images/illustration/portfolio-7.jpg',
      height:"500",
    },
 
  ];
























 




export default Services;