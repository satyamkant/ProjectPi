import "./css/BlogNavbar.css"
import {Link} from "react-router-dom";

const topics = [
    { name: "Intro", link: "/intro" },
    { name: "Algebra", link: "/algebra" },
    { name: "Data Structures", link: "/data_structure" },
    { name: "Dynamic Programming", link: "/dynamic_programming" },
    { name: "String Processing", link: "/string_processing" },
    { name: "Linear Algebra", link: "/linear_algebra" },
    { name: "Combinatorics", link: "/combinatorics" },
    { name: "Numerical Methods", link: "/numeric_methods" },
    { name: "Geometry", link: "/geometry" },
    { name: "Graphs", link: "/graphs" },
    { name: "Miscellaneous", link: "/miscellaneous" },
];

function BlogNavbar() {
    return (
        <div className="blogNavbar">
            <nav className="navbar blog-navbar navbar-dark navbar-expand-md">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">f
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            {topics.map((topic, index) => (
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