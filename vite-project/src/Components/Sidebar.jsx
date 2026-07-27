import React from 'react'
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,
  
  Package,
} from "lucide-react";
const categories = ["All", "Sneakers", "Flats", "Sandals", "Heels"];
const colors = [
  { name: "All", color: "bg-gradient-to-r from-purple-500 to-blue-500" },
  { name: "Black", color: "bg-black" },
  { name: "Blue", color: "bg-blue-600" },
  { name: "Red", color: "bg-red-600" },
  { name: "Green", color: "bg-green-600" },
  { name: "White", color: "bg-white border border-gray-400" },
];

const prices = [
  "All",
  "$0 - $50",
  "$50 - $100",
  "$100 - $150",
  "Over $150",
];


const Sidebar = () => {
  return (
    <div className='flex flex-col w-50 m-3 h-screen  border-gray-100 border-2 p-5  items-center'>
        <ShoppingBag size={24} />
        <h3 className='pt-5 font-bold'>Category</h3>
        

<div className='flex flex-col gap-3'>
  {categories.map((item) => (
    <label key={item}>
      <input type="radio" name="category" value={item} />
      {item}
    </label>
  ))}
</div>
 <h3 className='pt-4 font-bold'>Price</h3>
 <div className='flex flex-col gap-3'>
  {prices.map((item) => (
    <label key={item}>
      <input type="radio" name="prices" value={item} />
      {item}
    </label>
  ))}
</div>

  <h3 className='pt-4 font-bold'>Colors</h3>
  <div className="flex flex-col gap-3">
  {colors.map((item) => (
    <label key={item.name} className="flex items-center gap-3 cursor-pointer">
      <input type="radio" name="color" value={item.name} className="hidden peer" />

      <span
        className={`w-5 h-5 rounded-full ${item.color} border border-gray-300`}
      ></span>

      <span>{item.name}</span>
    </label>
  ))}
</div>
       
        
    </div>
  )
}

export default Sidebar