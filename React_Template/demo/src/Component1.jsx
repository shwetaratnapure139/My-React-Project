import './style.css'
const Component1=(data)=>{
    const compo=data.serv;
    return(
        <>
        <section className="">
            {
                compo.map((x)=>{
                    <>
                    <div className="pb-5">
                    <p>{x.para1}</p>
                    </div>
                    <img src={x.image} width="500px" height="500px"/>
                    <div className="text-center">
                    <h1>{x.head}</h1>
                    <p>{x.para2}</p>
                    </div>
                    </>
                })
            }
        </section>
        </>
    )
}
export default Component1;