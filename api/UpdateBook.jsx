import React, { useState } from "react";
import axios from "axios";

const UpdateBook = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [response, setResponse] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        axios
            .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                title: title
            })
            .then((res) => {
                setResponse("Book updated successfully!");
            })
            .catch((err) => {
                setResponse("Error updating book");
            });
    };

    return (
        <div>
            <h2>Update Book</h2>

            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Book ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="New Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type="submit">Update Book</button>
            </form>

            {response && <p>{response}</p>}
        </div>
    );
};

export default UpdateBook;