import { Link } from "react-router-dom";

const Card = ({ creator }) => {
    return(
        <div className="Card">
            <div className="image-name-container">
                <img src={creator.imageURL}></img>
                <h2>{creator.name}</h2>
            </div>
            <div className="description-container">
                <p>{creator.url}</p>
                <p>{creator.description}</p>
            </div>
            <Link to={`view/${creator.id}`}>
                <button>View</button>
            </Link>
        </div>
    )
}

export default Card;