import Card from '../components/Card';

const ShowCreators = ({ creators }) => {
    return(
        <div className="ShowCreators">
            {creators.length == 0 ?
                <div>No creators yet!</div>
                :
                creators.map(creator => {
                return(<Card creator={creator} key={creator.id}/>);
            })}
        </div>
    )
}

export default ShowCreators;