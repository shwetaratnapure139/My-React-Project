import './style.css'
const About = (props) => {
    const props_data = props.props_about;
    return (
        <>
            <section className="text-center mt-5">
                    <h3>ABOUT US</h3>
                <div className="d-lg-flex d-md-flex">
                {
                    props_data.map(function (x) {
                        return (
                            <figure className="mt-5 about-fig">

                                <img src={x.image} width="200px" height="200px" />
                                <div className="mt-3">
                                <h2>{x.head}</h2>
                                </div>
                                <figcaption className="cap">
                                    {x.caption}
                                </figcaption>
                            </figure>




                        )
                    })
                }
                </div>

            </section>
        </>
    )
}


export default About;