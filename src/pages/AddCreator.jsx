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
        <div className="App">
            <Header />
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                    maxLength={200} />
                </label>
                <br></br>

                <label>Social Media URL:
                    <input name="url"
                    value={inputs.url || ""}
                    onChange={handleChange}
                    maxLength={200} />
                </label>
                <br></br>

                <label>Description: 
                    <textarea name="description"
                    value={inputs.description || ""}
                    onChange={handleChange} 
                    rows={5}
                    cols={50} 
                    maxLength={500} />
                </label>
                <br></br>

                <label>Image URL:
                    <input name="imageUrl"
                    value={inputs.imageUrl || ""}
                    onChange={handleChange}
                    maxLength={200} />
                </label>
                <br></br>

                <button type="submit">Add Creator</button>
            </form>
        </div>
    )
}

export default AddCreator;