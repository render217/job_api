import React from 'react'

const Pagination = ({totalPage,itemPerPage,paginate,currentPage}) => {
    const totalPageNumbers = Math.ceil(totalPage / itemPerPage); 

    const pageNumbers = [...Array(totalPageNumbers + 1).keys()].slice(1)
    
    const activeClass = 'font-medium  rounded-md border pt-1 w-8 text-center h-7 cursor-pointer text-xs  bg-cblue text-white hover:border-cblue hover:text-cblue  '
    const nonActiveClass = 'font-medium  rounded-md border pt-1 w-8 text-center h-7 cursor-pointer text-xs text-cgray border-cgray  bg-white hover:border-cblue hover:text-cblue '
  return (
   <>
        <div className='flex gap-2 my-2 float-right py-5 px-2'>
            {pageNumbers.map(number =>(
                <div key={number} onClick={()=>paginate(number)} className={currentPage === number ? activeClass : nonActiveClass}>
                        {number}
                </div>
            ))}
        </div>
   </>
  )
}

export default Pagination