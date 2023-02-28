import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center fixed left-6 bottom-16 p-2 border-b border-gray-200">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="mr-3 text-xl sm:text-3xl hover:text-gray-700"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="mr-3 text-xl sm:text-3xl hover:text-gray-700"
      >
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="mr-3 text-xl sm:text-3xl hover:text-gray-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://pinterest.com"
        target="_blank"
        rel="noreferrer"
        className="text-xl sm:text-3xl hover:text-gray-700 "
      >
        <FaPinterest />
      </a>
    </div>
  );
};

export default SocialLinks;
