import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Logo from '../../Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <nav
        className={`fixed flex items-start flex-col left-0 top-0 w-44 sm:w-56 h-screen bg-white shadow-2xl z-50 ${
          isOpen
            ? 'translate-x-0 transition-transform duration-500 sm:translate-x-0 sm:transition-transform sm:duration-500'
            : '-translate-x-44 transition-transform duration-500 sm:-translate-x-56 sm:transition-transform sm:duration-500'
        }`}
      >
        <div className="flex p-2">
          <img src={Logo} alt="Logo" />
        </div>
        <button
          className="w-14 h-12 pl-1 z-51 text-white bg-cyan-900 shadow-lg rounded-r-full hover:bg-cyan-800 focus:outline-none relative inset-44 -top-40 sm:left-56 sm:-top-48"
          onClick={handleToggle}
        >
          {isOpen ? <BsArrowLeft size={40} /> : <BsArrowRight size={40} />}
        </button>
        <NavLinks handleClose={handleClose} />
        <SocialLinks />
        <p className="text-xs sm:text-sm text-gray-500 fixed bottom-6 left-10">
          © 2023 MotoMate
        </p>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40 sm:bg-transparent"
          onClick={handleClose}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
