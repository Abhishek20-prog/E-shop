import React from 'react'
import { Search , ShoppingCart ,Heart , User2Icon } from 'lucide-react'
const Searchbar = ({ searchInput, setSearchInput }) => {
  return (
    <div className=" border-gray-100 border-2 rounded-lg m-3 flex justify-between">
      <input
    
      type="text"
      placeholder="Search..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className="border-gray-300 p-2 rounded w-50 m-4 bg-gray-100"
    />
        <div className='flex items-center pr-4 gap-6'>
          <ShoppingCart />
          < Heart />
           < User2Icon />
        </div>
    </div>
  )
}

export default Searchbar