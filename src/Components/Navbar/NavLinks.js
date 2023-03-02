import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setCurrentUser } from '../../redux/users';

const NavLinks = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      dispatch(setCurrentUser(storedUsername));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <ul className="mt-4 text-lg sm:text-xl">
      <li className="pl-4 py-2 hover:bg-gray-100">
        <NavLink to="/motorcycles">Motorcycles</NavLink>
      </li>
      {currentUser !== null && ( // Add a check for null value
        <>
          <li className="pl-4 py-2 hover:bg-gray-100">
            <NavLink to="/make-reservations">Make a Reservation</NavLink>
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
          <li className="pl-4 py-2 hover:bg-gray-100">
            <NavLink to="/motorcycles" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        </>
      )}
      {currentUser === null && ( // Add a check for null value
        <>
          <li className="pl-4 py-2 hover:bg-gray-100">
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
