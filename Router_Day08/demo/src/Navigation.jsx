import {Link} from "react-router-dom";
const Navigation =()=>{
    return(
    <>
    <nav className="bg-dark">
        <ul className="d-flex w-75 justify-content-between mx-auto">
            <li>
                <Link to ="/" className="text-decoration-none text-light">
                    HOME
                </Link>
            </li>
            <li>
                <Link to="./About" className="text-decoration-none text-light">ABOUT</Link> 
            </li>
            <li>
                <Link to="./Cources" className="text-decoration-none text-light">
                    COURCES
                </Link>
            </li>
            <li>
                <Link to="./Contact" className="text-decoration-none text-light">
                    CONTACT
                </Link>
            </li>
        </ul>

    </nav>
    </>
    )
}
export default Navigation;