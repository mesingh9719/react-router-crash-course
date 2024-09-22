import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-500 font-medium" 
                  : "text-gray-600 hover:text-gray-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-500 font-medium" 
                  : "text-gray-600 hover:text-gray-800"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact-us" 
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-500 font-medium" 
                  : "text-gray-600 hover:text-gray-800"
              }
            >
              Contact us
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/github" 
              loader
              className={({ isActive }) => 
                isActive 
                  ? "text-orange-500 font-medium" 
                  : "text-gray-600 hover:text-gray-800"
              }
            >
              Github
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;