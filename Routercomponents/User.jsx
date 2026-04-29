import { Link,Outlet } from "react-router-dom";
function User(){
    return (
    <div>
    <h1>User List</h1>

      <Link to="1">User 1</Link>{" | "}
      <Link to="2">User 2</Link>{" | "}
      <Link to="3">User 3</Link>

      <Outlet />
    </div>
  );
}
export default User;
