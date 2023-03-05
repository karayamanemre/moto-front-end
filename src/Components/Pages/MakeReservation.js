import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReservation } from '../../redux/reservations';
import { useNavigate } from 'react-router-dom';

function MakeReservation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem('id');
    const motorcycle = JSON.parse(localStorage.getItem('motorcycle'));
    const motorcycleId = motorcycle.id;

    const reservationData = {
      start_date: startDate,
      end_date: endDate,
      motorcycle_id: motorcycleId,
      city,
      user_id: userId,
    };

    try {
      await dispatch(postReservation(reservationData));
    } catch (error) {}
    navigate('/reservations');
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
    <div
      className="flex flex-col justify-center items-center"
      id="reservation-page"
    >
      <h1 className="text-4xl font-bold mb-4 text-gray-100">
        BOOK A TEST-RIDE
      </h1>
      <p className="text-lg text-gray-200 mb-8 p-2">
        Please use the form below to book a test ride in your city.
      </p>
      <form
        onSubmit={handleSubmit}
        className="shadow-xl rounded-xl px-8 pt-6 pb-8 bg-gray-300 bg-opacity-80"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="start_date"
          >
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start_date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="end_date"
          >
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="end_date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-900 hover:bg-cyan-800 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book a Test-Ride
          </button>
        </div>
      </form>
    </div>
  );
}

export default MakeReservation;
