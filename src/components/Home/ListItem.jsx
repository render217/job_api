import React from 'react'
import { getElapsedTimeString } from '../../utils';
import { Link } from 'react-router-dom';
export const ListItem = ({ job }) => {
  const { id, name, author, date, salary, fulltime, city, zipcode, country, title, content, logo } = job;
  const elapsedDate = getElapsedTimeString(date);
  return (
    <>
      <Link to={`/${id}`}>
        <div className='mb-2 font-Roboto py-3 px-2 shadow border-gray-50  border bg-white flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-between md:items-end'>
          <div className='flex gap-3'>
            <div className='max-w-[90px] '>
              <img className='object-contain w-full h-full' src={logo} alt={name} />
            </div>
            <div className='text-cdeepblue'>
              <p className='text-xs font-medium'>{name}</p>
              <h3 className='mt-3 mb-3 text-lg'>{title}</h3>
              {Boolean(fulltime) && (<p className='text-xs font-medium border-2 border-cdeepblue w-fit px-2 py-1 rounded-md'>Full time</p>)}
            </div>
          </div>
          <div className='text-cgray text-xs flex gap-4'>
            <div className='flex items-center gap-2'>
              <i className="fa-solid fa-earth-europe"></i>
              <p>{city}</p>
            </div>
            <div className='flex items-center gap-2'>
              <i className="fa-regular fa-clock"></i>
              <p>{elapsedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
