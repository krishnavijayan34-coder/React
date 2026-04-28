import { useState } from "react";
import axios from "axios";

const useHttp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = (url) => {
        setLoading(true);

        axios.get(url)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    return { data, loading, error, fetchData };
};

export default useHttp;