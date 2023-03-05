import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMotorcycle } from '../../redux/motorcycles';
import SwiperComponent from './Swiper';

const Motorcycles = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycle());
  }, [dispatch]);

  if (motorcycles.length === 0) {
    return <h2 className="text-2xl">No motorcycles available</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-4 text-center">
      <h2 className="sm:text-3xl text-2xl font-bold mb-4">
        Featured Motorcycles
      </h2>
      <p className="text-gray-500 mb-6">
        Check out our selection of the latest and greatest motorcycles.
      </p>
      <SwiperComponent motorcycles={motorcycles} />
    </div>
  );
};

export default Motorcycles;
