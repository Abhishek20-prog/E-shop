import React from 'react'
import { Search , ShoppingCart ,Heart , User2Icon } from 'lucide-react'
const Searchbar = () => {
  return (
    <div className=" border-gray-100 border-2 rounded-lg m-3 flex justify-between">
        <input className='bg-gray-300 m-2 p-2  border-gray-100 border-2 rounded-lg'
        placeholder='Enter to search'
        type='text'
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