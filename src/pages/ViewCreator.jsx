import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { supabase } from "../client";
import CreatorDetails from "../components/CreatorDetails";
import Header from "../components/Header";
import DeleteModal from "../components/DeleteModal";

const ViewCreator = () => {
    let creatorId = useParams();
    const [creator, setCreator] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

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

    const handleDelete = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('creators')
            .delete()
            .eq('id', creatorId.id);
        
        setShowModal(false);
        navigate("/");
    }

    return(
        <div className="App">
            <Header />
            {creator ? 
            <div>
                <CreatorDetails creator={creator} />
                <Link to={`/edit/${creator.id}`}>
                    <button>
                        Edit
                    </button>
                </Link>
                <button onClick={() => setShowModal(true)}>
                    Delete
                </button>
                {showModal && createPortal(
                    <DeleteModal onClose={() => setShowModal(false)} handleDelete={handleDelete} />,
                    document.body
                )}
            </div>
            :
            <div>
                <p>Loading...</p>
            </div>}
        </div>
    )
}

export default ViewCreator;