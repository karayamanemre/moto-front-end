import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../redux/users';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, username }));
    navigate('/login');
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="shadow-xl rounded-xl px-8 pt-6 pb-8 bg-gray-300 bg-opacity-70"
      >
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            User Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Enter a username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <button
            className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <p>Already registered?</p>
          <Link
            to="/login"
            className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
