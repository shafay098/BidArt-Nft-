import React from 'react'
import { SwiperSlide , Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CustomCard from '../Card/Custom_Card';
import { Category_swiper_data } from '../../../assets/helper/DummyData';


const Category_swiper = () => {

  const clasess_obj = {
    header:'Category-swiperslide-Header-Class-Category-Swiper .Header-Class-Category-Swiper img',
    body:'Category-swiperslide-Body-Class-Category-Swiper'
  }
  return (
    <>
    <div className='Category-Swiper-Cont w-100'>
       <Swiper
       effect='fade'
       breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        490: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200:{
          slidesPerView:5,
          spaceBetween:30,
        },
        1400:{
          slidesPerView:5,
          spaceBetween:30,
        }
       
      }}
       speed={1500}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Category-swiper"
      >
        {
          Category_swiper_data.map((item)=>{
            return(
            <SwiperSlide id={item.id} key={item.id} className='Category-swiperslide'>
    <CustomCard sockets={'category'}  clasess={clasess_obj} img={item.img} header_text={item.header} body_text={item.text}/>
            </SwiperSlide>)
          })
        }
      </Swiper>
      </div>
    </>
  )
}

export default Category_swiper
