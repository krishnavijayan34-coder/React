import React from "react";
import Get from "./api/getApi";
import CreatePost from "./api/CreatePost";
import UpdateBook from "./api/UpdateBook";
import DeleteBook from "./api/DeleteBook";
const App = () => {
    return (
        <div>
            <h1>Axios API Exercises</h1>
            <hr />
            
            <Get />
            <hr />
            <CreatePost/>
            <hr/>
            <UpdateBook />
            <hr />
          <DeleteBook/>
        </div>
    );
};

export default App;