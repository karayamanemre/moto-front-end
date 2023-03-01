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

  return (
    <div className="mx-20 my-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-5">Delete Motorcycles</h1>
      <ul className="flex flex-wrap items-center justify-center gap-6">
        {motorcycles.map((motorcycle) => (
          <li key={motorcycle.id} className="mb-4">
            <div className="flex items-center">
              <img
                src={motorcycle.img_url}
                alt={motorcycle.name}
                className="w-40 h-40"
              />
              <div>
                <h2 className="text-lg font-bold">{motorcycle.name}</h2>
                <p>{motorcycle.description}</p>
                <p className="text-sm">Price: ${motorcycle.price}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(motorcycle.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteMotorcycles;
