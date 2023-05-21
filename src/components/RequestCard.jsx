import React from 'react';

export default function RequestCard ({request}) {
    const {id, photo, name, type, status, createdAt} = request;
  return (
    <li className='flex flex-row'>
        <div className='w-1/5 flex justify-center bg-sky-500'>
            <h1>{id}</h1>
        </div>


        <div className='w-1/5 flex flex-row justify-start'>
            <img src={photo} className='h-8 w-8 rounded-full mr-4 ml-8' alt='photo'/>
            <h1>{name}</h1>
        </div>

        <div className='w-1/5 flex justify-center'>
            <h1>{type}</h1>
        </div>
        
        <div className='w-1/5 flex justify-center'>
            <h1>{status}</h1>
        </div>
       
        <div className='w-1/5 flex justify-center'>
            <h1>{createdAt}</h1>
        </div>
        
        
        
    </li>
  )
}