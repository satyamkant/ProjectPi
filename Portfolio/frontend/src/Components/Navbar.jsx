import logo from "../Resources/Images/favicon.ico"
import { Link } from "react-router-dom";
import "./css/Navbar.css"

function Navbar(){
    return (
        <header className="md-header">
            <nav className="navbar navbar-dark navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src = {logo} alt="satyampi logo" width="30" height="24"/> SatyamPi
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/blog">Blogs</Link>
                            </li>
                        </ul>
                        <button className="btn btn-success" >Login</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;