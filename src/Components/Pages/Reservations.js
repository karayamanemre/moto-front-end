import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h1>Reservations</h1>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>Motorcycle ID: {reservation.motorcycle_id}</p>
          <p>City: {reservation.city}</p>
          <p>Start Date: {reservation.start_date}</p>
          <p>End Date: {reservation.end_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
