import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ handleClose }) => {
  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(!!userId);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(!!userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('id')]);

  return (
    <ul className="mt-4 w-full text-lg sm:text-xl" onClick={handleClose}>
      <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
        <NavLink to="/motorcycles">Motorcycles</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
        <NavLink to="/reservations">My Reservations</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
        <NavLink to="/add-motorcycle">Add a Motorcycle</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
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
