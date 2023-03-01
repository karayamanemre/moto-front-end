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

  return (
    <div className="mx-20 my-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
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
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter motorcycle description"
            onChange={handleInputChange}
            value={motorcycle.description}
          />
        </div>
        <div className="mb-6">
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
        <div className="mb-6">
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
        <div className="mb-6">
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
        <div className="mb-6">
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
        <div className="mb-6">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Motorcycle
        </button>
      </form>
    </div>
  );
};

export default AddMotorcycle;
