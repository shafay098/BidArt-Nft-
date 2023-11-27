import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import { Images } from '../../../assets/images';





const BrandSlider = () => {
    const {Brand_slider_img_arr} = Images
    return (
        <div className=''>
            <Swiper
                a11y={false}
                slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={false}
                speed={11000}
                autoplay={{

                    delay: 1,
                    disableOnInteraction: false,

                }}
                loop={true}
                modules={[Autoplay]}
                className="BrandSliderSwiper"
                allowTouchMove={false}


            >

                {
                    Brand_slider_img_arr.map((img, index) => {
                        return (
                            <SwiperSlide className='custom-swiper-slide' key={index}>
                                <div className='card h-100 card-custom px-5 py-3'>
                                <img src={img} alt='nothing' />
                                </div>
                            </SwiperSlide>
                        )

                    })
                }

                <br />
                <br />

            </Swiper>

            <Swiper
                allowTouchMove={false}

                a11y={false}
                grabCursor={false}
                slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={true}
                speed={11000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="BrandSliderSwiper"


            >
                 {
                     Brand_slider_img_arr.map((img, index) => {
                        return (
                            <SwiperSlide key={index} className='custom-swiper-slide'>
                            <div className='card h-100 card-custom px-5 py-3'>
                            <img src={img} alt='nothing' />
                            </div>
                        </SwiperSlide>
                        )

                    })
                }



            </Swiper>
        </div>

    )
}

export default BrandSlider
