import { Link } from "react-router-dom";

const Card = ({ creator }) => {
    return(
        <div className="Card">
            <div className="image-name-container">
                <img src={creator.imageURL}></img>
                <h2>{creator.name}</h2>
                <a href={creator.url}>
                    <img src={"youtube-app-white-icon.png"} />
                </a>
            </div>
            <div className="description-container">
                <p>{creator.description}</p>
            </div>
            <Link to={`view/${creator.id}`} className="view-button">
                <button>View</button>
            </Link>
        </div>
    )
}

export default Card;