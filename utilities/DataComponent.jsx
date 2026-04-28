import React, { useEffect } from "react";
import useHttp from "./useHttp";

const DataComponent = () => {
    const { data, loading, error, fetchData } = useHttp();

    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts");
    }, []);

    return (
        <div>
            <h2>API Data</h2>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {data.slice(0, 5).map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
};

export default DataComponent;