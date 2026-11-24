import './style.css'
const Footer=(props)=>{
    const foot_data=props.foot;
    
    return(
        <>
        <section className="foot-bg">
            {
               foot_data.map((x)=>{
                return(
                    <>

                    <div className="text-light m-5 pt-5">

                    <img src={x.image}  width="100px" height="100px"/>
                    <h1>{x.head}</h1>
                    <button type="button" className="btn btn-light rounded-0 mt-2 bg-light">{x.btnfoot}</button>
                  
                    <div className="mt-3">
                    <span className="me-3">
                        <img src={x.icon1} />
                        </span>
                    <span className="me-3">
                        <img src={x.icon2} />
                        </span>
                        <img src={x.icon3}/>
                    <p>{x.para1}</p>
                    <p>{x.para2}</p>
                    </div>
               
                    
                    
                    <div className="d-lg-flex justify-content-evenly gap-5">
                  
                    <ul className="list-unstyled">
                        <li><a href="" className="text-decoration-none text-light">{x.list1}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list2}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list3}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list4}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list5}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list6}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list7}</a></li>




                    </ul>
                    <p>{x.para3}</p>

                    <ul className="list-unstyled">
                        <li><a href="" className="text-decoration-none text-light">{x.list1}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list2}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list3}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list4}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list5}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list6}</a></li>
                        <li><a href="" className="text-decoration-none text-light">{x.list7}</a></li>




                    </ul>
                    </div>
                    Copyright ©2024 All rights reserved | This template is made with by @Shweta Ratnapure
                    
                    </div>
                  
                 
                    </>
                )
               })
            }
           
                
           
             
          
           
            
        </section>
        </>
    )
}




export default Footer;