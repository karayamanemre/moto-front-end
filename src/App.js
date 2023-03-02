import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Motorcycles from './Components/Pages/Motorcycles';
import DeleteMotorcycle from './Components/Pages/DeleteMotorcycle';
import AddMotorcycle from './Components/Pages/AddMotorcycle';
import Reservations from './Components/Pages/Reservations';
import MakeReservation from './Components/Pages/MakeReservation';
import MotorcycleDetails from './Components/Pages/MotorcycleDetails';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import withAuth from './Components/Pages/Auth';

const AuthMakeReservation = withAuth(MakeReservation);
const AuthReservations = withAuth(Reservations);
const AuthAddMotorcycle = withAuth(AddMotorcycle);
const AuthDeleteMotorcycle = withAuth(DeleteMotorcycle);
const AuthMotorcycleDetails = withAuth(MotorcycleDetails);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Motorcycles />} />
          <Route path="/Motorcycles" element={<Motorcycles />} />
          <Route path="/add-motorcycle" element={<AuthAddMotorcycle />} />
          <Route path="/delete-motorcycle" element={<AuthDeleteMotorcycle />} />
          <Route path="/reservations" element={<AuthReservations />} />
          <Route path="/make-reservation" element={<AuthMakeReservation />} />
          <Route
            path="/motorcycle-details/:id"
            element={<AuthMotorcycleDetails />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
