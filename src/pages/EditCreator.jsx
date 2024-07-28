import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Header from "../components/Header";

const EditCreator = ({ creator }) => {
    let creatorId = useParams();
    const [inputs, setInputs] = useState(creator);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
            .from('creators')
            .select()
            .eq('id', creatorId.id);

            setInputs(data[0]);
        }
        if (creatorId != null) {
            fetchData();
        }
    }, [creatorId]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('creators')
            .update(
                { name: inputs.name, 
                    url: inputs.url,
                    description: inputs.description,
                    imageURL: inputs.imageUrl}
            )
            .eq('id', creatorId.id)
        
        navigate("/");
    }

    return(
        <div className="App">
            <Header />
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input name="name"
                    value={inputs && inputs.name || ""}
                    onChange={handleChange}
                    maxLength={200} />
                </label>
                <br></br>

                <label>Social Media URL:
                    <input name="url"
                    value={inputs && inputs.url || ""}
                    onChange={handleChange}
                    maxLength={200} />
                </label>
                <br></br>

                <label htmlFor="description">Description:
                    <textarea name="description"
                    value={inputs && inputs.description || ""}
                    onChange={handleChange}
                    rows={5}
                    cols={50} 
                    maxLength={500} />
                </label>
                <br></br>

                <label htmlFor="imageUrl">Image URL:
                    <input name="imageUrl"
                    value={inputs && inputs.imageURL || ""}
                    onChange={handleChange}
                    maxLength={200} />
                </label>
                <br></br>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditCreator;