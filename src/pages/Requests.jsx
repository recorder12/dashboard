import React from 'react';
import RequestCard from '../components/RequestCard';

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

export default function Requests() {
  const requestList = requests.items
  return (
    <>
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
      {requestList.map((request) => <RequestCard key={request.id} request={request}/>)}
    </ul>
    </>
  );
}
