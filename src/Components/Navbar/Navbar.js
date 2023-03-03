import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Logo from '../../Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="hidden sm:block fixed left-0 top-0 w-56 h-screen bg-white shadow-2xl">
        <div className="flex p-2">
          <img src={Logo} alt="Logo" />
        </div>
        <NavLinks />
        <SocialLinks />
        <p className="text-xs sm:text-sm text-gray-500 fixed bottom-6 left-10">
          © 2023 MotoMate
        </p>
      </nav>
      <div className="sm:hidden">
        <nav
          className={`fixed left-0 top-0 w-56 h-screen z-50 bg-white shadow-2xl transform transition-all duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button className="fixed top-2 -right-8" onClick={toggleNavbar}>
            <BsArrowRight size="1.5rem" />
          </button>
          <div className="flex p-2">
            <img src={Logo} alt="Logo" />
          </div>
          <NavLinks />
          <SocialLinks />
          <p className="text-xs sm:text-sm text-gray-500 fixed bottom-6 left-10">
            © 2023 MotoMate
          </p>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
