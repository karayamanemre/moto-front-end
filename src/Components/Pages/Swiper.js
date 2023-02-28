import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const SwiperComponent = ({ motorcycles }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
      }}
      className="py-10"
    >
      {motorcycles.map((motorcycle) => (
        <SwiperSlide key={motorcycle.id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:scale-105">
            <Link
              to={`/motorcycle-details/${motorcycle.id}`}
              onClick={() =>
                localStorage.setItem('motorcycle', JSON.stringify(motorcycle))
              }
            >
              <div className="w-96 h-72 p-2 bg-gray-300">
                <img
                  className="w-full"
                  src={motorcycle.img_url}
                  alt={motorcycle.name}
                />
              </div>
            </Link>
            <div className="px-6 py-4 text-center">
              <h3 className="font-bold text-xl mb-2">{motorcycle.name}</h3>
              <p className="text-gray-500 text-base">
                {motorcycle.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
