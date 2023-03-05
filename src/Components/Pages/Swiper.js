/* eslint-disable react/prop-types */
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
      loop
      centeredSlides={true}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        1300: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 2,
        },
      }}
      className="py-10"
    >
      {motorcycles.map((motorcycle) => (
        <SwiperSlide key={motorcycle.id}>
          <div className="flex flex-col w-3/4 ml-10 items-center text-center rounded-3xl">
            <Link
              to={`/motorcycle-details/${motorcycle.id}`}
              onClick={() =>
                localStorage.setItem('motorcycle', JSON.stringify(motorcycle))
              }
            >
              <div className="w-92 h-72 p-2">
                <img
                  className="rounded-2xl object-cover transition-all ease-in hover:scale-105"
                  src={motorcycle.img_url}
                  alt={motorcycle.name}
                />
              </div>
            </Link>
            <div className="p-2 text-center w-full">
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
