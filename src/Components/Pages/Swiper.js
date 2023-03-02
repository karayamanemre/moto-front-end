import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

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
      className="py-20 flex gap-4"
    >
      {motorcycles.map((motorcycle) => (
        <SwiperSlide key={motorcycle.id}>
          <div className="card m-2 p-2 flex flex-col items-center text-center border-4 rounded-2xl">
            <Link
              to={`/motorcycle-details/${motorcycle.id}`}
              onClick={() =>
                localStorage.setItem('motorcycle', JSON.stringify(motorcycle))
              }
            >
              <div className="w-96 h-72">
                <img
                  className="rounded-2xl"
                  src={motorcycle.img_url}
                  alt={motorcycle.name}
                />
              </div>
            </Link>
            <div className="p-6 text-center w-full">
              <h3 className="font-bold text-xl mb-2 border-b-4 border-cyan-800 border-dotted pb-4">
                {motorcycle.name}
              </h3>
              <p className="text-gray-500 text-base">
                {motorcycle.description}
              </p>
            </div>
            <div className="flex justify-center mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="mr-3 text-xl sm:text-3xl text-cyan-900 hover:text-cyan-800"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="mr-3 text-xl sm:text-3xl text-cyan-900 hover:text-cyan-800"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="mr-3 text-xl sm:text-3xl text-cyan-900 hover:text-cyan-800"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
