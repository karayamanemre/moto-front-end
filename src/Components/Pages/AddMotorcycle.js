import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMotorcycle } from '../../redux/motorcycles';
import { useNavigate } from 'react-router-dom';

const AddMotorcycle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [motorcycle, setMotorcycle] = useState({
    name: '',
    description: '',
    img_url: '',
    model_year: '',
    price: '',
    engine: '',
    fuel_type: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMotorcycle((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMotorcycle(motorcycle));
    navigate('/motorcycles');
  };

  if (!localStorage.getItem('id')) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-2">
        <h1 className="text-3xl font-bold mb-4">Sorry!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Looks like you're not logged in yet. Please login to access this page.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center  w-full">
      <form
        onSubmit={handleSubmit}
        className="shadow-xl rounded-xl px-8 pt-6 pb-8 bg-gray-300 bg-opacity-70 w-3/4 sm:w-2/4"
      >
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter motorcycle name"
            onChange={handleInputChange}
            value={motorcycle.name}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter motorcycle description"
            onChange={handleInputChange}
            value={motorcycle.description}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="img_url"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img_url"
            name="img_url"
            type="text"
            placeholder="Enter motorcycle image URL"
            onChange={handleInputChange}
            value={motorcycle.img_url}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="model_year"
          >
            Model Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="model_year"
            name="model_year"
            type="text"
            placeholder="Enter motorcycle model year"
            onChange={handleInputChange}
            value={motorcycle.model_year}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="number"
            placeholder="Enter motorcycle price"
            onChange={handleInputChange}
            value={motorcycle.price}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="engine"
          >
            Engine
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="engine"
            name="engine"
            type="text"
            placeholder="Enter motorcycle engine"
            onChange={handleInputChange}
            value={motorcycle.engine}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fuel_type"
          >
            Fuel Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fuel_type"
            name="fuel_type"
            type="text"
            placeholder="Enter motorcycle fuel type"
            onChange={handleInputChange}
            value={motorcycle.fuel_type}
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Motorcycle
        </button>
      </form>
    </div>
  );
};

export default AddMotorcycle;
