import React from 'react'
import { ListItem } from './ListItem'

export const List = ({jobs}) => {
  return (
      <>
        <div className='space-y-4'>
          {jobs.map(job => <ListItem key={job.id} job={job}/>)}
      
        </div>
      </>
  )
}
