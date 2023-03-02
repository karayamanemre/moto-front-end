import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, deleteReservation } from '../../redux/reservations';
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
    if (window.confirm('Are you sure you want to delete this motorcycle?')) {
      dispatch(deleteReservation(id)).then(() => dispatch(fetchReservations()));
    }
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reservations</h1>
      {reservations.map((reservation) => (
        <div
          className="bg-gray-200 rounded-lg shadow-lg p-6 mb-6 flex items-center gap-4"
          key={reservation.id}
        >
          <img
            src={getMotorcycleImage(reservation.motorcycle_id)}
            alt={getMotorcycleName(reservation.motorcycle_id)}
            className="h-44 w-1/2"
          />
          <div className="flex flex-col w-1/2 sm:text-lg text-sm">
            <p className="sm:text-lg text-md mb-2 self-center">
              {getMotorcycleName(reservation.motorcycle_id)}
            </p>
            <p className="text-gray-600 mb-2 flex justify-between">
              <span>City:</span>
              <span>{reservation.city}</span>
            </p>
            <p className="text-gray-600 mb-2 flex justify-between">
              <span>Start Date:</span>
              <span>{reservation.start_date}</span>
            </p>
            <p className="text-gray-600 flex justify-between">
              <span>End Date:</span>
              <span>{reservation.end_date}</span>
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleDeleteReservation(reservation.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
