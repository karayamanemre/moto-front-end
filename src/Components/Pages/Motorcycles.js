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

  return <SwiperComponent motorcycles={motorcycles} />;
};

export default Motorcycles;
