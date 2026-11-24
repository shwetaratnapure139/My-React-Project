const Home =(props) =>{
    const content=props.item;
    return(
        <>
        <section className="text-center w-75 mx-auto">
         <h2>This is Home Page</h2>
         <h4>Welcome to react routing Dem</h4>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod similique rerum officia voluptas libero consectetur, vel perspiciatis saepe id voluptatem labore provident voluptatibus eveniet molestiae ipsa esse. Esse, tempore.</p>
         {
            content.map((x)=>{
                return(
                    <>
                    <img src={x.image1} width="250px" height="350px"/>
                    </>
                )
            })
         }
        </section>
        </>
    )

}
export default Home;