import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, setCurrentUser } from '../../redux/users';

const NavLinks = ({ handleClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      dispatch(setCurrentUser(storedUsername));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
  };

  return (
    <ul className="mt-4 w-full text-lg sm:text-xl" onClick={handleClose}>
      <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
        <NavLink to="/motorcycles">Motorcycles</NavLink>
      </li>
      {localStorage.getItem('username') ? (
        <>
          <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
            <NavLink to="/reservations">My Reservations</NavLink>
          </li>
          <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
            <NavLink to="/add-motorcycle">Add a Motorcycle</NavLink>
          </li>
          <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
            <NavLink to="/delete-motorcycle">Delete Motorcycle</NavLink>
          </li>
          <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
            <NavLink to="/motorcycles" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
