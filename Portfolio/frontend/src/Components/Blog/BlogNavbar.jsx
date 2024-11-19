import "./css/BlogNavbar.css"
import {Link} from "react-router-dom";
import data from "../../DAO/portfolio.json"

function BlogNavbar() {
    return (
        <div className="blogNavbar">
            <nav className="navbar blog-navbar navbar-dark navbar-expand-md">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            {data.topics.map((topic, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={topic.link}>{topic.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default BlogNavbar;