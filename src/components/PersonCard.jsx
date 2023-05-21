import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonCard({person}) {
   const  {name, unit, photo, phone, email, id} = person
   const navigate = useNavigate();
  return (
    <li onClick={()=> navigate(`/people/${id}`)}
        className='bg-personCard border border-gray-300 p-4 rounded-md hover:bg-personCardHover cursor-pointer'
    >
        <img src={photo} className='h-15 w-15 rounded-full' alt='photo'/>
        <h1>{name}</h1>
        <h1>unit : {unit}</h1>
        <h1>phone : {phone}</h1>
        <h1>email : {email}</h1>
    </li>
  );
}
