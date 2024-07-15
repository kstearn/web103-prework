const Card = ({ creator }) => {
    return(
        <div className="Card">
            <h2>{creator.name}</h2>
            <p>{creator.url}</p>
            <p>{creator.description}</p>
            <p>{creator.imageURL}</p>
        </div>
    )
}

export default Card;