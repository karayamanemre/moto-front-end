import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(!!userId);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(!!userId);
  }, [localStorage.getItem('id')]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <ul className="mt-4 w-full text-lg sm:text-xl" onClick={toggleNavbar}>
      <li
        className={`pl-4 py-2 ${
          isActive('/motorcycles')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/motorcycles">Motorcycles</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/reservations')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/reservations">My Reservations</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/add-motorcycle')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/add-motorcycle">Add a Motorcycle</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/delete-motorcycle')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/delete-motorcycle">Delete Motorcycle</NavLink>
      </li>
      {isLoggedIn ? (
        <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
          <NavLink to="/motorcycles" onClick={handleLogout}>
            Logout
          </NavLink>
        </li>
      ) : (
        <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
