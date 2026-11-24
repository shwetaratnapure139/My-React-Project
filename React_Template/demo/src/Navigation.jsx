import './style.css'
const Navigation = (props) => {
    const props_data = props.data;
    return (
        <>
         
            <nav className="row justify-content-center navigate align-items-center head-nav">
           
                
                <div className="logo text-center col-12 col-lg-3">
                <img src="../images/illlustration/logo .png" width="100px" height="50px" className="pt-3"/>
             </div>
             <ul className="nav col-12 col-lg-9 fs-5 fw-bold" >
                    {
                         
                        props_data.map((x, key) => {
                            return (

                                <>
                               
                                <li className="nav-item "><a href="" className="nav-link d-none d-lg-block text-dark">{x.anchor}</a></li>
                               
                                </>


                            )
                        })
                    }
                </ul>
                <section className="section-main d-lg-none">
                    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                        <img src="../images/icons/menu.png" className="d-lg-none  menu" />
                    </button>

                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">

                            <ul className="">
                                {
                                    props_data.map((x, key) => {
                                        return (


                                            <li className="list-unstyled "><a href="" className="nav-link text-dark">{x.anchor}</a></li>


                                        )
                                    })
                                }

                            </ul>


                        </div>
                    </div>
                </section>


            </nav>
        </>
    )
}


export default Navigation;