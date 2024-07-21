const CreatorDetails = ({ creator }) => {
    return(
        <div>
            <img src={creator.imageURL} />
            <h2>{creator.name}</h2>
            <p>{creator.url}</p>
            <p>{creator.description}</p>
        </div>
    )
}

export default CreatorDetails;