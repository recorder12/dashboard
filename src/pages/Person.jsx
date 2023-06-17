import React from 'react';
import RequestCard from '../components/RequestCard';
import { useParams } from 'react-router-dom';
import PersonCard from '../components/PersonCard';

const requests ={
  "items" : [
      {
      "id" : 1,
      "userId" : 1,
      "photo" : "https://randomuser.me/api/portraits/men/60.jpg",
      "name" : "John Doe",
      "type" : "visiting",
      "createdAt" : "2018-10-10",
      "status" : "closed"
  },
  {
      "id" : 2,
      "userId" : 2,
      "photo" : "https://randomuser.me/api/portraits/men/50.jpg",
      "name" : "Bili joe",
      "type" : "cleaning",
      "createdAt" : "2018-10-12",
      "status" : "closed"
  },
  {
      "id" : 3,
      "userId" : 3,
      "photo" : "https://randomuser.me/api/portraits/men/51.jpg",
      "name" : "Smith Brown",
      "type" : "dinning",
      "createdAt" : "2018-10-13",
      "status" : "active"
  },
  {
      "id" : 4,
      "userId" : 4,
      "photo" : "https://randomuser.me/api/portraits/men/53.jpg",
      "name" : "Peter Parker",
      "type" : "visiting",
      "createdAt" : "2018-10-14",
      "status" : "active"
  },
  {
      "id" : 5,
      "userId" : 5,
      "photo" : "https://randomuser.me/api/portraits/men/54.jpg",
      "name" : "Will Smith",
      "type" : "cleaning",
      "createdAt" : "2018-10-15",
      "status" : "active"
  }
  ]
}


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

export default function Person() {
  const { id } = useParams();
  const filteredPeopleList = peopleList.items.filter((person) => person.id === Number(id))
  const filteredRequestList = requests.items.filter((request) => request.userId === Number(id))

  // make new personcard component for person page
  return (
    <>
    <PersonCard person={filteredPeopleList[0]}/>
      <h1 >Request History</h1>
    <div className='flex justify-center my-10 py-4 bg-peopleTitle '>
      <div className='flex flex-row w-screen'>
        <div className='w-1/5 flex justify-center'>
          <h1  >Id</h1>
        </div>

        <div className='w-1/5 flex justify-center'>
          <h1 className='w-1/5'>Name</h1>
        </div>
        
        <div className='w-1/5 flex justify-center'>
          <h1 className='w-1/5'>Type</h1>
        </div>
        
        <div className='w-1/5 flex justify-center'>
          <h1 className='w-1/5'>Status</h1>
        </div>
        
        <div className='w-1/5 flex justify-center'>
          <h1 className='w-1/5'>CreatedAt</h1>
        </div>
      </div>
    </div>
    <ul className='flex-row '>
      {filteredRequestList.map((request) => <RequestCard key={request.id} request={request}/>)}
    </ul>
    </>
  );
}