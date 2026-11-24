import './style.css'
const Hero_section=(props)=>{

const props_hero = props.main_sec;
return(
  <>
  <section className="hero">
    {
       props_hero.map((x)=>{
        return(
        <>
        <div className="head-hero text-center ">
        <h1 className="hero-heading">{x.head}</h1>
        </div>
        <div className="para-hero text-center fs-4 text-light">
        <p>{x.para}</p>
        </div>
        <div className="btn1 text-center">
        <button type="button" class="btn btn-outline-light rounded-0">{x.btn1}</button>
        </div>
        </>
        )
       })
    }
  </section>
  </>
) 
   
}
export default Hero_section;