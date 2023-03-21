import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMotorcycle, fetchMotorcycle } from '../../redux/motorcycles';
import { TiDelete } from 'react-icons/ti';
import TopNav from '../Navbar/TopNav';

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
        <h1 className="sm:text-3xl text-2xl font-bold mb-4">Sorry!</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Looks like you&apos;re not logged in yet. Please login to access this
          page.
        </p>
      </div>
    );
  }

  return (
    <div>
      <TopNav pageTitle="Delete a Motorcycle" />
      <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-center items-center w-full pt-10 sm:pt-40">
        {motorcycles.map((motorcycle) => (
          <div
            className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
            key={motorcycle.id}
          >
            <img
              src={`https://motomate.fly.dev${motorcycle.img_url}`}
              alt={motorcycle.name}
              className="h-44 w-96 object-cover rounded-t-lg"
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
                  className="bg-red-600 hover:bg-red-700 text-white font-bold flex items-center py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(motorcycle.id)}
                >
                  <TiDelete className="inline-block mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteMotorcycles;
