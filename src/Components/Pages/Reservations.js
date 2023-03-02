import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations';
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

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reservations</h1>
      {reservations.map((reservation) => (
        <div
          className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 flex items-center"
          key={reservation.id}
        >
          <img
            src={getMotorcycleImage(reservation.motorcycle_id)}
            alt={getMotorcycleName(reservation.motorcycle_id)}
            className="h-20 w-20 mr-4"
          />
          <div>
            <p className="text-lg font-medium">
              Motorcycle: {getMotorcycleName(reservation.motorcycle_id)}
            </p>
            <p className="text-gray-600 mb-2">City: {reservation.city}</p>
            <p className="text-gray-600 mb-2">
              Start Date: {reservation.start_date}
            </p>
            <p className="text-gray-600 mb-2">
              End Date: {reservation.end_date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
