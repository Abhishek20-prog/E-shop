import { useState } from 'react';
import Category from './Components/Category';
import ProductGrid from './Components/ProductGrid';
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,
  Package,
} from "lucide-react";
import { use } from 'react';
import Colors from './Components/Colors';
import Price from './Components/Price';
import Searchbar from './Components/Searchbar';
function App() {
  const [selectedCategory, setCategory] = useState("All");
  const [selectedPrice, setPrice] = useState("All");
  const[selectedColor , setColor] = useState("All")
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className='flex '>
      <div className='flex flex-col w-50 m-3 h-screen  border-gray-100 border-2 p-5  items-center'>
        <ShoppingBag size={24} />
        <Category 
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
        <Colors
          selectedColor={selectedColor}
          setColor={setColor}
        />
        <Price
          selectedPrice={selectedPrice}
          setPrice={setPrice}
        />
     

      </div>
      <div>
         <Searchbar
  searchInput={searchInput}
  setSearchInput={setSearchInput}
/>
     
        

      <ProductGrid
        selectedCategory={selectedCategory}
         selectedColor={selectedColor}
          selectedPrice={selectedPrice}
          searchInput={searchInput}
      />
 </div>

    </main>
  );
}

export default App;