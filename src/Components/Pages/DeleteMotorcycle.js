import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMotorcycle, fetchMotorcycle } from '../../redux/motorcycles';

const DeleteMotorcycles = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this motorcycle?')) {
      dispatch(deleteMotorcycle(id)).then(() => dispatch(fetchMotorcycle()));
    }
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
    <div className="mx-auto px-4 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <h2 className="text-3xl font-bold mb-8 col-span-full text-center text-gray-800">
        Delete Motorcycles
      </h2>
      {motorcycles.map((motorcycle) => (
        <div
          className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
          key={motorcycle.id}
        >
          <img
            src={motorcycle.img_url}
            alt={motorcycle.name}
            className="h-44 w-full object-cover rounded-t-lg"
          />
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <p className="text-lg font-bold mb-2 text-gray-800">
                {motorcycle.name}
              </p>
              <p className="mb-2 text-gray-700">{motorcycle.description}</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="font-bold text-lg text-gray-700">
                ${motorcycle.price}
              </p>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDelete(motorcycle.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteMotorcycles;
