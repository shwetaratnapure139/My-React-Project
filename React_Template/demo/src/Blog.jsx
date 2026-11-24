import './style.css'
const Blog=(props)=>{
    const blog_props=props.blog;
    return(
        <>
         <section className="blog">
       {
        blog_props.map((x)=>{
           return(
            <>
           <div className="container">
            <div className="row">
               
           <p className="text-center mt-5 fs-3">{x.para1}</p>
              <div className="mt-5  d-md-flex justify-content-center align-items-center">
       
        <div className="container">
            <img src={x.image} className="img-fluid" />
            </div>
       <div className="container blog-describe">
            <h1>{x.head}</h1>
            

            <p className="t">{x.para2}</p>
        
            <div className="blog-btn text-center">
            <button type="button" class="btn btn-outline-dark rounded-0">{x.btn5}</button>
            </div>
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
export default Blog;