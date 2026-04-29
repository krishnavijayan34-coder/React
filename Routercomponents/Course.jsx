import { Link, Outlet } from "react-router-dom";

function Courses() {
  return (
    <div>
      <h1>Courses Page</h1>

      
      <Link to="java">Java</Link>{" | "}
      <Link to="python">Python</Link>

      <Outlet />
    </div>
  );
}

export default Courses;