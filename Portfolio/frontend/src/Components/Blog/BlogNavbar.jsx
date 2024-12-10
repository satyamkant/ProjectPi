import "./css/BlogNavbar.css"
import {Link} from "react-router-dom";
import data from "../../DAO/portfolio.json"

function BlogNavbar() {
    return (
        <div className="nav-scroller bg-body shadow-sm">
            <nav className="nav" aria-label="Secondary navigation">
                <Link className="nav-link" aria-current="page" to="/">Dashboard</Link>
                <Link className="nav-link" to="/">
                    Friends
                    <span className="badge text-bg-light rounded-pill align-text-bottom">27</span>
                </Link>
                <Link className="nav-link" to="/">Explore</Link>
                <Link className="nav-link" to="/">Suggestions</Link>
                <Link className="nav-link" to="/">Link</Link>
                <Link className="nav-link" to="/">Link</Link>

            </nav>
        </div>
    );
}

export default BlogNavbar;