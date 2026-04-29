import { Link, Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("filter");

  const handleActiveUsers = () => {
    setSearchParams({ filter: "active" });
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <div>
      <h1>User List</h1>

      {/* Buttons */}
      <button onClick={handleActiveUsers}>Active Users</button>
      <button onClick={handleReset}>Reset Filters</button>

      {/* Message based on filter */}
      {!filter && <p>Showing all users</p>}
      {filter === "active" && <p>Showing active users</p>}

      <Link to="1">User 1</Link>{" | "}
      <Link to="2">User 2</Link>{" | "}
      <Link to="3">User 3</Link>

      <Outlet />
    </div>
  );
}

export default User;
