import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('');
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    const user = {
      name,
    };

    const userData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:3000/api/v1/register', userData)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('name', data.name);
        setAlert('Logged in. Redirecting to main page.');
        return data;
      })
      .catch((error) => console.error(error));

    setName('');
    setTimeout(() => {
      setAlert('');
      navigate('/motorcycles');
    }, 1500);
  };
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={createUser}
        className="flex flex-col bg-gray-300 p-4 gap-4 rounded-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label htmlFor="name" className="hidden">
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="p-2 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-cyan-900 hover:bg-cyan-800 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {alert && <span className="text-red-500 mt-4">{alert}</span>}
    </div>
  );
}
export default Login;
