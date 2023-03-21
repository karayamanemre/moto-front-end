import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPerson, IoMdHome } from 'react-icons/io';

const userName = localStorage.getItem('name');

const TopNav = ({ pageTitle }) => {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-white shadow-md py-4 px-12">
      <Link to="/">
        <IoMdHome size={28} />
      </Link>
      <h2 className="text-xl font-bold sm:text-2xl">{pageTitle}</h2>
      {userName ? (
        <span className="text-lg flex items-center gap-1">
          <IoMdPerson size={28} /> {userName}
        </span>
      ) : (
        <Link to="/login" className="text-lg">
          <span className="text-lg flex items-center gap-1">
            <IoMdPerson size={28} />
            Login
          </span>
        </Link>
      )}
    </div>
  );
};

export default TopNav;
