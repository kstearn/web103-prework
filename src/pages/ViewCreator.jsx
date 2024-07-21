import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";
import CreatorDetails from "../components/CreatorDetails";
import Header from "../components/Header";

const ViewCreator = () => {
    let creatorId = useParams();
    const [creator, setCreator] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
            .from('creators')
            .select()
            .eq('id', creatorId.id);

            setCreator(data[0]);
        }
        if (creatorId != null) {
            fetchData();
        }
    }, [creatorId]);

    return(
        <div>
            <Header />
            {creator ? 
            <div>
                <CreatorDetails creator={creator} />
                <Link to={`/edit/${creator.id}`}>
                    <button>
                        Edit
                    </button>
                </Link>
                <button>
                    Delete
                </button>
            </div>
            :
            <div>
                <p>Loading...</p>
            </div>}
        </div>
    )
}

export default ViewCreator;