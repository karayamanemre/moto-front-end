import React from 'react';
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Logo from '../../Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <nav
        className={`fixed flex flex-col left-0 top-0 w-44 sm:w-56 h-screen bg-white shadow-xl z-50 ${
          isOpen
            ? 'translate-x-0 transition-transform duration-500 sm:translate-x-0 sm:transition-transform sm:duration-500'
            : '-translate-x-44 transition-transform duration-500 sm:-translate-x-56 sm:transition-transform sm:duration-500'
        }`}
      >
        <button
          className="w-8 h-8 bg-white rounded hover:text-gray-600 focus:outline-none relative inset-44 sm:left-56 top-4"
          onClick={handleToggle}
        >
          {isOpen ? (
            <BsFillArrowLeftSquareFill size={32} />
          ) : (
            <BsFillArrowRightSquareFill size={32} />
          )}
        </button>
        <div className="flex items-center justify-between h-16 p-4 border-b border-gray-200 mt-10">
          <img src={Logo} alt="Logo" />
        </div>
        <NavLinks />
        <SocialLinks />

        <p className="text-sm sm:text-lg text-gray-400 fixed bottom-6 left-10">
          © 2023 MotoMate
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
