import { Outlet, Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Product Page</h1>

      <input type="text" placeholder="Search product..." />

      <Link to="features">Featured</Link>{" | "}
      <Link to="new">New</Link>

      <Outlet />
    </div>
  );
}

export default Product;