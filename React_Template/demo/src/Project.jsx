const Project=(props)=>{
    const props_data=props.project;
    return(
        <>
        <div className="text-center mt-5 container">
        <p className="text-secondary">PROJECT VIEW</p>
        <div className="container">
        <h1>Our Latest Projects</h1>
        </div>
        </div>
        
        <section className="section3 mt-5 ">
         <div className="row">
         {
            props_data.map((x)=>{
              return(
                <>
                
                <div className="container">
                <div className="pt-2">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
               <img src={x.image} className="img-fluid" />
               </div>
               <div className="col-lg-6 col-md-6  pt-5">
                <div className="text-center">
               <h2>{x.head}</h2>
               </div>
              <div className="text-lg-end text-center mx-auto container projet-text ">
               <p className="text-center">{x.para}</p>
               </div>
               <div className="text-center">
               <button type="button" class="btn btn-outline-dark rounded-0" >{x.btn2}</button>
               </div>
               
               </div>
               </div>  
                </div>
                </div>
                </>
              )
            })
          }
         </div>

        </section>
       
        </>
    )
}
export default Project;