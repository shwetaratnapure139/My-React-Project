import './style.css'
// import imgg1  from './images/illlustration/onee.png'
const Service=(props)=>{
    const props_service=props.service;
    return(
        <>
        <section>
            {
               props_service.map((x)=>{
               return(
                <>
              <div className="container">
                <div className="text-center mt-4 fs-4">
                <p className="service-para1">{x.para}</p>
                </div>
                <div className="d-md-flex">
                <div className=" order-md-3">
                <img src={x.igg} className="img-fluid service-img "/>
                </div>
                <div className="text-center heading-service container">
                <h1>{x.head}</h1>
                <div className="para-service  container fs-5 text-secondary w-75 ">
                <p>{x.para2}</p>
                </div>
                <div className="btn-service">
                <button type="button" class="btn btn-outline-dark rounded-0">{x.btn3}</button>
                </div>
                </div>
                
                
                </div>
                </div>
                
               
                </>
               )
               })
            }
        </section>
        </>
    )
}
export default Service;