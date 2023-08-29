import React from 'react'

export const SearchBar = ({searchInput,setSearchInput}) => {
  return (
    <>
        <div className="rounded-xl px-3 font-Roboto relative py-10 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-blue-500 to-purple-500" style={{backgroundImage: `url('/backgroundImg.png')`}} >
              <div className='bg-white rounded-md max-w-[700px]  mx-auto flex items-center'>
                  <i className="text-cgray text-xs fa-solid fa-briefcase  ml-4"></i>
                  <input value={searchInput} onChange={setSearchInput} className='text-cgray px-2 w-full outline-0 text-xs tracking-wide' type="text" placeholder='Title,companies,expertise or benefits'/>
                  <button className='text-xs bg-cblue py-3 px-8 m-1 rounded-md text-white'>Search</button>
              </div>
        </div>
    </>
  )
}
