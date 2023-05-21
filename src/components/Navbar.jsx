import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header>
      <nav className='flex flex-col'>
          <Link to='/'>
            <div className={`flex justify-center items-center h-40 border-menuBorder border-y-2 ${location.pathname === '/' ? 'bg-primary' : 'bg-menu'}`}>
              Home  
            </div>
          </Link>
        
          <Link to='/people'>
            <div className={`flex justify-center items-center h-40 border-menuBorder border-y-2 ${location.pathname === '/people' ? 'bg-primary' : 'bg-menu'}`}>
              People
            </div>
          </Link>

          <Link to='/requests'>
            <div className={`flex justify-center items-center h-40 border-menuBorder border-y-2 ${location.pathname === '/requests' ? 'bg-primary' : 'bg-menu'}`}>
              Request
            </div>
          </Link>
          
          <Link to='/calendar'>
            <div className={`flex justify-center items-center h-40 border-menuBorder border-y-2 ${location.pathname === '/calendar' ? 'bg-primary' : 'bg-menu'}`}>
              calendar
            </div>
          </Link>
          
          <Link to='/settings'>
            <div className={`flex justify-center items-center h-40 border-menuBorder border-y-2 ${location.pathname === '/settings' ? 'bg-primary' : 'bg-menu'}`}>
              settings
            </div>
          </Link>
      </nav>
    </header>
  );
}

