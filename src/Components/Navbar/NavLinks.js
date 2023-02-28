import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="mt-4 text-lg sm:text-xl">
      <li className="pl-4 py-2 hover:bg-gray-100">
        <NavLink to="/motorcycles">Motorcycles</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <NavLink to="/reservations">Reservations</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <NavLink to="/my-reservations">My Reservations</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <NavLink to="/add-motorcycle">Add a Motorcycle</NavLink>
      </li>
      <li className="pl-4 py-2 hover:bg-gray-100">
        <NavLink to="/delete-motorcycle">Delete Motorcycle</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
