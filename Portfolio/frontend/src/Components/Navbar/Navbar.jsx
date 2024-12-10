import logo from "../../Resources/Images/favicon.ico"
import { Link } from "react-router-dom";
import "./Navbar.css"
import Login from "../Login/Login";
import {useState} from "react";
import AuthService from "../Controller/AuthService";

function Navbar({isAuthenticated,name, onAutheChange}){

    const [userName, setUserName] = useState(name);

    const handleLoginSuccess = (response) => {
        if(response.status === 200){
            setUserName(response.data.userDto.name);
            onAutheChange();
        }
    }

    const handleLogout = () => {
        AuthService.LogoutService().then((response) => {
            console.log(response);
            if(response.message === "Successfully Logged out"){
                alert("You have been logged out.");
                window.location.href = "/";
            }
       })

    };

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

                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button" data-bs-toggle="dropdown" aria-expanded="false"> Hi {userName}!
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Editor</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
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