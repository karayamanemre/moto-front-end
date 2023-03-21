import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorcycle } from '../../redux/motorcycles';
import SwiperComponent from './Swiper';
import TopNav from '../Navbar/TopNav';

const Motorcycles = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  if (motorcycles.length === 0) {
    return (
      <h2 className="text-2xl p-40 text-center">No motorcycles available</h2>
    );
  }

  return (
    <div>
      <TopNav pageTitle="Featured Motorcycles" />
      <div className="flex justify-center items-center pt-40">
        <SwiperComponent motorcycles={motorcycles} />
      </div>
    </div>
  );
};

export default Motorcycles;
