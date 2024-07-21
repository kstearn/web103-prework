import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import Header from "../components/Header";

const AddCreator = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('creators')
            .insert([
                { name: inputs.name, 
                    url: inputs.url,
                    description: inputs.description,
                    imageURL: inputs.imageUrl}
            ])
            .select();
        
        navigate("/");
    }

    return(
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input name="name"
                    value={inputs.name || ""}
                    onChange={handleChange} />
                </label>
                <br></br>
                <br></br>

                <label htmlFor="url">Social Media URL:
                    <input name="url"
                    value={inputs.url || ""}
                    onChange={handleChange} />
                </label>
                <br></br>
                <br></br>

                <label htmlFor="description">Description:
                    <input name="description"
                    value={inputs.description || ""}
                    onChange={handleChange} />
                </label>
                <br></br>
                <br></br>

                <label htmlFor="imageUrl">Image URL:
                    <input name="imageUrl"
                    value={inputs.imageUrl || ""}
                    onChange={handleChange} />
                </label>
                <br></br>
                <br></br>

                <button type="submit">Add Creator</button>
            </form>
        </div>
    )
}

export default AddCreator;