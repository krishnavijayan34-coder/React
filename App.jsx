import { useState,useMemo,useCallback, use } from "react";
import ProductList from "./ProductListNew";
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
  { id: 4, name: "Headphones", price: 2000 }
];
function App(){
   const[search,setSearch]=useState("");
   const[cart,SetCart]=useState([]);
   const filteredProducts=useMemo(()=>{
    console.log("Searching....");
    return products.filter((products)=>
      products.name.toLowerCase().includes(search.toLowerCase())
    );
   },[search]);

   const addToCart=useCallback((products)=>{
    SetCart((prev)=>[...prev,products]);
   },[]);

   return(
    <div>
      <h2>Product Search</h2>
      <input
      type="text"
      placeholder="Search Product"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <ProductList products={filteredProducts} addToCart={addToCart}/>
      <h3>Cart items;{cart.length}</h3>
    </div>
   );
}
export default App;