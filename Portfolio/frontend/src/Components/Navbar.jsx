import logo from "../Resources/Images/favicon.ico"
import "./css/Navbar.css"

function Navbar(){
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container">
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
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Blogs</a>
                        </li>
                    </ul>
                    <button className="btn btn-success" >Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;