import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MotorcycleDetails = () => {
  const motorcycle = JSON.parse(localStorage.getItem('motorcycle'));

  return (
    <div className="container flex flex-col sm:flex-row justify-around items-start p-4 gap-10">
      <div className="h-full rounded bg-gray-200 p-2">
        <img
          className="rounded"
          src={motorcycle.img_url}
          alt={motorcycle.name}
        />
      </div>
      <ul className="text-right flex flex-col">
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
          <Link
            to={`/motorcycles`}
            onClick={() =>
              localStorage.setItem('motorcycle', JSON.stringify(motorcycle))
            }
            className="after:content-['_>']"
          >
            DISCOVER MORE MODELS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MotorcycleDetails;
