import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../redux/users';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await dispatch(login(username));
    if (response.payload.status === 200) {
      const { id, user_name } = response.payload.data;
      localStorage.setItem('user_id', id);
      localStorage.setItem('username', user_name);
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="shadow-xl rounded-xl px-8 pt-6 pb-8 bg-gray-300 bg-opacity-70"
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <button
            className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <p>Not registered yet?</p>
          <Link
            to="/register"
            className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
