import React from 'react';
import { Link } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';

const MotorcycleDetails = () => {
  const motorcycle = JSON.parse(localStorage.getItem('motorcycle'));

  return (
    <div className="container flex flex-col items-center sm:flex-row justify-around sm:items-start p-4 gap-10">
      <div className="h-full sm:w-2/4 rounded bg-gray-200 p-2 shadow-lg">
        <img
          className="rounded"
          src={motorcycle.img_url}
          alt={motorcycle.name}
        />
      </div>
      <ul className="text-right flex flex-col sm:w-1/4">
        <li className="sm:text-4xl text-3xl px-4 py-2">{motorcycle.name}</li>
        <li className="mb-4 px-4 py-2">-{motorcycle.description}</li>
        <li className="bg-gray-200 px-4 py-2 text-lg flex justify-between">
          <p>Model Year:</p>
          <p>{motorcycle.model_year}</p>
        </li>
        <li className="text-lg px-4 py-2 flex justify-between">
          <p>Price:</p>
          <p>${motorcycle.price}</p>
        </li>
        <li className="bg-gray-200 px-4 py-2 text-lg flex justify-between">
          <p>Engine:</p>
          <p>{motorcycle.engine}</p>
        </li>
        <li className="text-lg px-4 py-2 flex justify-between">
          <p>Fuel Type:</p>
          <p>{motorcycle.fuel}</p>
        </li>
        <li className="text-md px-4 py-2 mt-6">
          <Link to={`/motorcycles`} className="after:content-['_>']">
            DISCOVER MORE MODELS
          </Link>
        </li>
        <li className="text-lg px-4 py-2 mt-8">
          <Link
            to="/make-reservation"
            className="button bg-green-400 hover:bg-green-500 p-4 rounded-full flex items-center justify-center"
          >
            <TiEdit className="inline-block mr-2" />
            Make a Reservation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MotorcycleDetails;
