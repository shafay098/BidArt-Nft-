import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import UserItemCard from "./UserItemCard";
// import UserHistoryModal from "./UserHistoryModal";
// import UserPlaceBidModal from "./UserPlaceBidModal";
import CardData from "./card_data.json";
// import required modules
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Banner_Swiper = () => {
  const [historyModalShow, setHistoryModalShow] = useState(false);
  const [placeBidModalShow, setPlaceBidModalShow] = useState(false);
  const handleHistoryModal = () => {
    setHistoryModalShow(!historyModalShow);
    console.log("clicked");
  };
  const handlePlaceBidModal = () => {
    setPlaceBidModalShow(!placeBidModalShow);
    console.log("clicked");
  };

  return (
    <div className="banner-center-slider  animate__animated animate__fadeInUp">
      <Swiper
        style={{ height: "100%" }}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400:{
            slidesPerView:3,
            spaceBetween:30,
          }
         
        }}
        loop={true}
        speed={1500}
        spaceBetween={30}
        centeredSlides={true}
        className="Banner-Swiper"
        modules={[Navigation]}
        navigation={{
          prevEl: ".bs-left-arrow",
          nextEl: ".bs-right-arrow",
        }}
      >
        {CardData.map((userData) => {
          const { id } = userData;
          return (
            <SwiperSlide key={id} className="Banner-Swiper-slide">
              <UserItemCard
                userData={userData}
                handleHistoryModal={handleHistoryModal}
                handlePlaceBidModal={handlePlaceBidModal}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="banner-slider-nav">
        <div className="bs-left-arrow light-shadow-bg">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0269 7.55957H0.817552"
              stroke="currentColor"
              strokeWidth="1.16474"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.92188 1.45508L0.817222 7.55973L6.92188 13.6644"
              stroke="currentColor"
              strokeWidth="1.16474"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="bs-right-arrow light-shadow-bg">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.816895 7.55957H13.0262"
              stroke="currentColor"
              strokeWidth="1.16474"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.92188 1.45508L13.0265 7.55973L6.92188 13.6644"
              stroke="currentColor"
              strokeWidth="1.16474"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner_Swiper;
