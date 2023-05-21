import React from 'react';
import PersonCard from '../components/PersonCard';

const peopleList = {
  "items" : [
      {
      "id" : 1,
      "photo" : "https://randomuser.me/api/portraits/men/60.jpg",
      "name" : "John Doe",
      "email" : "john@gmail.com",
      "phone": "555-555-5555",
      "unit" : "A-1"
  },
  {
      "id" : 2,
      "photo" : "https://randomuser.me/api/portraits/men/50.jpg",
      "name" : "Bili joe",
      "email" : "john@gmail.com",
      "phone": "555-555-5555",
      "unit" : "B-2"
  },
  {
      "id" : 3,
      "photo" : "https://randomuser.me/api/portraits/men/51.jpg",
      "name" : "Smith Brown",
      "email" : "john@gmail.com",
      "phone": "555-555-5555",
      "unit" : "B-12"
  },
  {
      "id" : 4,
      "photo" : "https://randomuser.me/api/portraits/men/53.jpg",
      "name" : "Peter Parker",
      "email" : "john@gmail.com",
      "phone": "555-555-5555",
      "unit" : "F-1"
  },
  {
      "id" : 5,
      "photo" : "https://randomuser.me/api/portraits/men/54.jpg",
      "name" : "Will Smith",
      "email" : "john@gmail.com",
      "phone": "555-555-5555",
      "unit" : "E-1"
  }
  ]
}


export default function People() {

  const fetchedPeople = peopleList.items

  return (
    <>
    <div className='flex justify-center my-10 py-4 bg-peopleTitle '>
      <h1 >People List</h1>
    </div>
    <ul className='ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
      {fetchedPeople.map((person) => <PersonCard key={person.id} person={person}/>)}
    </ul>
    </>
  );
}
