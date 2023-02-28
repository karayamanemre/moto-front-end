import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Motorcycles from './Components/Pages/Motorcycles';
import DeleteMotorcycle from './Components/Pages/DeleteMotorcycle';
import AddMotorcycle from './Components/Pages/AddMotorcycle';
import Reservations from './Components/Pages/Reservations';
import MakeReservation from './Components/Pages/MakeReservation';
import MotorcycleDetails from './Components/Pages/MotorcycleDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <Routes>
          <Route path="/" element={<Motorcycles />} />
          <Route path="/Motorcycles" element={<Motorcycles />} />
          <Route path="/add-motorcycle" element={<AddMotorcycle />} />
          <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/make-reservation" element={<MakeReservation />} />
          <Route
            path="/motorcycle-details/:id"
            element={<MotorcycleDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
