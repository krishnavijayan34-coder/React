import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//import MyComponent from "./newcomponent";
//import MyName from "./myname";
//import Welcome from "./welcome.jsx"
import ProductCard from './productcard.jsx';

function App() {
const products = [
    { name: "Laptop", price: 31000 },
    { name: "MAC", mark: 65000 },
  ];
  return (
    <div>
     <ProductCard name="Shoes" price={2000} />  
       {products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          price={item.price }
          mark={item.mark}
         
        />
      ))}
            
    </div>
  );
      
}

export default App;
