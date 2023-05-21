import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Login from '../components/Login';
import { logout } from '../api/firebase';

export default function Home() {
  const { user } = useAuthContext();
  if (!user) {
    return <Login />;
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div>
        Welcome to the Senior Service Center!
      </div>  
      <div>
        <button className='w-40 h-10 bg-logout rounded-full mt-4' onClick={logout}>Log</button>
      </div>
    </div>
  );
}
