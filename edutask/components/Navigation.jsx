import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex items-center justify-center'>
      
      <div className=" flex items-center justify-center float-left">
        <button onClick={toggleSidebar} className="z-50 p-4 bg-purple hover:bg-purple-dark text-white focus:outline-none">
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 z-50 bg-purple ${isOpen ? 'w-64' : 'w-0'} overflow-hidden transition-all duration-300`}>
        <nav className='border border-black flex flex-col items-center justify-center p-2 rounded-lg m-8'>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/dashboard" className="text-black hover:text-gray-700 px-2 py-1 rounded-md">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/tasks" className="text-black hover:text-blue-700 px-2 py-1 rounded-md">
                Tasks
              </Link>
            </li>
            <li>
              <Link href="/idea-board" className="text-black hover:text-blue-700 px-2 py-1 rounded-md">
                Idea Board
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Navigation;

