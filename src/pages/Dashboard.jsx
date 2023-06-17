import React, { useContext, useState } from "react";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import VideoComponent from "../components/VideoComponent";

import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { RapperContent } from "../App";

  SwiperCore.use([Autoplay, Pagination]);
const Dashboard = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
const {allVideos} = useContext(RapperContent)
  return (
    <div className=" min-h-screen pb-20 pt-40 bg-[#451019]">
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
      {allVideos?.filter((i)=> i?.progress !== 0).length !== 0 &&  <div className="flex items-center gap-1">
        
          <h1 className="py-2 text-2xl font-bold text-white">Recently Watched </h1>
        </div>}
        <Swiper
       breakpoints={breakpoints}
          speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {allVideos?.filter((i)=> i?.progress !== 0).map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">Nouvelle {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Histoire</h1>
        </div>
        <Swiper
          breakpoints={breakpoints}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
       speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {allVideos?.filter((i)=> i?.category === 'Histoire').map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">Incroyable {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Philosophie</h1>
        </div>
        <Swiper
          breakpoints={breakpoints}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
       speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {allVideos?.filter((i)=> i?.category === 'Philosophie').map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">Troisième {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Sciences</h1>
        </div>
        <Swiper
          breakpoints={breakpoints}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
       speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {allVideos?.filter((i)=> i?.category === 'Sciences').map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
  
        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">Troisième {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Anglais</h1>
        </div>
        <Swiper
          breakpoints={breakpoints}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
       speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {allVideos?.filter((i)=> i?.category === 'Anglais').map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
  
      </div>
    </div>
  );
};

export default Dashboard;
