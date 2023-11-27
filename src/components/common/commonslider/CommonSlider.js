import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const CommonSlider = (props) => {
  const { allCardData } = props;
  return (
    <>
      <div className="common-slider" id="common-slider-section">
        <Swiper
          spaceBetween={30}
          autoHeight={true}
          slidesPerView={5}
          a11y={false}
          grabCursor={true}
          freeMode={true}
          speed={1500}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="auction-swiper-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            385: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {allCardData.map((cardData) => {
            const { id } = cardData;
            return <SwiperSlide key={id}>{cardData.card}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </>
  );
};

export default CommonSlider;
