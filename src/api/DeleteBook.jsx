import React, { useState } from "react";
import axios from "axios";

const DeleteBook = () => {
    const [id, setId] = useState("");
    const [response, setResponse] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();

        axios
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setResponse("Book deleted successfully!");
            })
            .catch((err) => {
                setResponse("Error deleting book");
            });
    };

    return (
        <div>
            <h2>Delete Book</h2>

            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Book ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <button type="submit">Delete Book</button>
            </form>

            {response && <p>{response}</p>}
        </div>
    );
};

export default DeleteBook;