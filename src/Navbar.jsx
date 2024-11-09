import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link to="/evenement" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Evenement</Link>

              <Link to="/formulaire" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Formulaire</Link>

              <Link to="/experts2" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experts2</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

