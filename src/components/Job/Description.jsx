import React from 'react'
import { getElapsedTimeString } from '../../utils';

export const Description = ({ job }) => {
  const { id, name, author, date, salary, fulltime, city, zipcode, country, title, content, logo } = job;
  const elapsedDate = getElapsedTimeString(date);
  return (
    <>
      <div className='font-Roboto text-cdeepblue'>
        <div className='flex items-center gap-3 flex-wrap'>
          <h2 className='text-3xl font-medium'>{title}</h2>
          {fulltime && (<p className='text-xs font-medium border-2 border-cdeepblue w-fit px-2 py-1 rounded-md'>Full time</p>)}
        </div>
        <div className='text-xs text-gray-500 mt-2 flex items-center gap-1'>
          <i className="fa-regular fa-clock"></i>
          <p>{elapsedDate}</p>
        </div>
        <div className='flex gap-3 my-5'>
          <div className='max-w-[40px] '>
            <img className='object-contain w-full h-full' src={logo} alt={name} />
          </div>
          <div className='text-cdeepblue'>
            <p className='text-md font-medium'>{name}</p>
            <div className='text-xs  text-gray-500 flex items-center gap-2'>
              <i className="fa-solid fa-earth-europe"></i>
              <p>{city}</p>
            </div>
          </div>

        </div>
        <div className='my-5'>
          <p className='font-light leading-7'>{content}</p>
        </div>
      </div>
    </>
  )
}
