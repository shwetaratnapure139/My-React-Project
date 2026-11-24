const Form1=(props)=>{
    const form=props.form;
    return(
        <>
        <section className="contact">
            {
                form.map((x)=>{
                    return(
                        <>
                       <div className="container">
                        <div className="text-center mt-5 contact-text">
                       <p>{x.para1}</p>
                       <h1>{x.head}</h1>
                       </div>
                       <div className="">
                        <div className="d-lg-flex justify-content-evenly align-items-center p-lg-5 d-md-flex">
                      
                      
                        <img src={x.image}  className="img-form p-lg-3"/>
                      
                       <div className="form-inputs">
                       <div className="mt-3 input1-form">
                     <input type={x.input1} class="form-control" placeholder="YOUR EMAIL" className="input1"/>
                           </div>
                  
                      <div className="mt-3  mx-auto">
                      <input type={x.input2} class="form-control" placeholder="SUBJECT" className="input2"/>
                      </div>
                      <div class="mt-3 text-form">
 
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="MESSAGE" className="text-msg">{x.text}</textarea>
                          </div>
                          <div className="text-center mt-5">
                <button type="button" className="btn btn-outline-dark rounded-0 btn-sub">{x.btn6}</button>
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
export default Form1;