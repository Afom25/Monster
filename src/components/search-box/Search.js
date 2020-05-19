import React from 'react';


export const SearchBox = ({placeholder,handleChange}) => (
  
  <div class='container text-center'>
    <input 
   className='search'
   placeholder={placeholder}
   type='search' placeholder='search monsters' onChange={handleChange}/>
   </div>
)