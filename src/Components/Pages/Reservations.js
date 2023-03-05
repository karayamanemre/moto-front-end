import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchReservations } from '../../redux/reservations';
import { fetchMotorcycle } from '../../redux/motorcycles';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const motorcycles = useSelector((state) => state.motorcycles);

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  const getMotorcycleName = (id) => {
    const motorcycle = motorcycles.find((moto) => moto.id === id);
    return motorcycle ? motorcycle.name : '';
  };

  const getMotorcycleImage = (id) => {
    const motorcycle = motorcycles.find((moto) => moto.id === id);
    return motorcycle ? motorcycle.img_url : '';
  };

  const handleDeleteReservation = (id) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      dispatch(deleteReservation(id)).then(() => dispatch(fetchReservations()));
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
    <div className="flex justify-center flex-col items-center p-4">
      <h2 className="sm:text-3xl text-2xl font-bold mb-6 pt-4">
        Reservations for:{' '}
        {localStorage.getItem('name') &&
          localStorage.getItem('name').charAt(0).toUpperCase() +
            localStorage.getItem('name').slice(1)}
      </h2>
      <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-center items-center w-full">
        {reservations.length === 0 && (
          <p className="text-lg font-bold text-gray-800 text-center">
            You have no reservations yet.
          </p>
        )}
        {reservations.map((reservation) => (
          <div
            className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
            key={reservation.id}
          >
            <img
              src={getMotorcycleImage(reservation.motorcycle_id)}
              alt={getMotorcycleName(reservation.motorcycle_id)}
              className="h-44 w-96 object-cover rounded-t-lg"
            />
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-lg font-bold mb-2 text-gray-800">
                  {getMotorcycleName(reservation.motorcycle_id)}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-bold">City:</span>
                  <span className="text-gray-700">{reservation.city}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-bold">Start Date:</span>
                  <span className="text-gray-700">
                    {reservation.start_date}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-bold">End Date:</span>
                  <span className="text-gray-700">{reservation.end_date}</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-2"
                  onClick={() => handleDeleteReservation(reservation.id)}
                >
                  Cancel Reservation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
