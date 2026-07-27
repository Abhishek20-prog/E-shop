


import { useState } from 'react';

import Category from './Components/Category';
import ProductGrid from './Components/ProductGrid';
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,

  Package,
} from "lucide-react";
function App() {
  const [selectedCategory, setCategory] = useState("All");

  return (
    <main className='flex '>
      <div className='flex flex-col w-50 m-3 h-screen  border-gray-100 border-2 p-5  items-center'>
        <ShoppingBag size={24} />
        <Category
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </div>

      <ProductGrid
        selectedCategory={selectedCategory}
      />


    </main>
  );
}

export default App;