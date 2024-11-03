import "./css/Resume.css"
import Card from "./Card";

function Resume() {
    return (
        <section id="resume">
            <div className="container-fluid p-5">
                <div className="row text-center justify-content-center">
                    <Card
                        featured="Education"
                        title="Institute of Engineering and Management, Kolkata"
                        description=""
                    />
                </div>
            </div>
        </section>
    )
}

export default Resume;