import logo from "../Resources/Images/favicon.ico"
import { Link } from "react-router-dom";
import "./css/Navbar.css"
import Login from "./Login";
import {useState} from "react";

function Navbar({isAuthenticated,name, onAutheChange}){

    const [userName, setUserName] = useState(name);

    const handleLoginSuccess = (response) => {
        if(response.status === 200){
            setUserName(response.data.userDto.name);
            onAutheChange();
        }
    }

    return (
        <header className="md-header">
            <nav className="navbar navbar-dark navbar-expand-md">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src = {logo} alt="satyampi logo" width="30" height="24"/> SatyamPi
                    </Link>
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
                        {isAuthenticated ?
                            (


                                <button type="button" className="btn btn-secondary">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-person-circle mx-2" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fillRule="evenodd"
                                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                        <span className="navbar-text">Welcome, {userName}!</span>
                                    </div>
                                </button>
                            )
                            :
                            (
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                    Login
                                </button>
                            )}

                    </div>
                </div>
            </nav>
            <Login onLoginSuccess={handleLoginSuccess}/>
        </header>
    )
}

export default Navbar;