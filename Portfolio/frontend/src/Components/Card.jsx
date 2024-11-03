import "./css/Card.css"

function Card(props) {
    const title = props.title;
    const description = props.description;
    const featured = props.featured;

    return (
        <div>
            <div className="card">
                <h5 className="card-header">{featured}</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;