import React, { useState } from "react";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import VideoComponent from "../components/VideoComponent";
import { videos } from "../assets/demo";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';

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

  return (
    <div className=" min-h-screen pt-40 bg-[#451019]">
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
        <div className="flex items-center gap-1">
        
          <h1 className="py-2 text-2xl font-bold text-white">Recently Watched </h1>
        </div>
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
          {videos?.filter((i)=> i?.progress !== undefined).map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">New {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Math Videos</h1>
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
          {videos.map((item, ind) => (
            <SwiperSlide key={ind}>
              <VideoComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1 mt-10">
          <p className="text-gray-50">Popular {">"} </p>
          <h1 className="py-2 text-2xl font-bold text-white">Science Videos</h1>
        </div>
        <Swiper
          breakpoints={breakpoints}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          speed={2000}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {videos.map((item, ind) => (
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
