import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/users';

const NavLinks = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
      {currentUser ? (
        <>
          <li className="pl-4 py-2 hover:bg-gray-100 mt-5">
            <span>{currentUser.user_name}</span>
          </li>
          <li className="pl-4 py-2 hover:bg-gray-100">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li className="pl-4 py-2 hover:bg-gray-100 mt-5">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="pl-4 py-2 hover:bg-gray-100">
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
