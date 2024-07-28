const CreatorDetails = ({ creator }) => {
    return(
        <div className="CreatorDetails">
            <img src={creator.imageURL} />
            <h2>{creator.name}</h2>
            <a href={creator.url}>{creator.url}</a>
            <p>{creator.description}</p>
        </div>
    )
}

export default CreatorDetails;