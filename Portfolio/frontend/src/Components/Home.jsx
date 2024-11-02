import "./css/Home.css";
import data from "../DAO/portfolio.json"
import programmer from "../Resources/Images/programmer.svg"

function Home() {
    return (
        <section id="home">
            <div className="container p-5 text-center text-md-start" >
                <div className="d-md-flex">
                    <div className="me-5">
                        <h1> Hi There</h1>
                        <p className="lead">
                            {data.aboutMe.map((segment, index) =>
                                segment.bold ? <strong key={index}>{segment.text}</strong> : segment.text
                            )}
                        </p>
                    </div>
                    <img className="img-fluid w-25 mx-5" src={programmer} alt="programmer photo"/>
                </div>
            </div>
        </section>
    )
}

export default Home;