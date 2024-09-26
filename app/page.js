'use client'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import React, { useRef, useState } from 'react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Pagination, Navigation } from 'swiper/modules';

import Image from "next/image";
export default function Home() {
  // const [swiperRef, setSwiperRef] = useState(null);



  return (
    <>
      <div className="w-full flex overflow-hidden items-center justify-center">
          <div className="flex flex-col w-full h-[818px] overflow-hidden bg-[#36a5c1] gap-12  pt-[50px] pr-[171px] pb-[0px] pl-[148px]">
            <div className="flex flex-col items-center justify-centers gap-8">
              <h1 className="text-[47px] font-semibold text-white">Uzmanlıklara göre göz atın</h1>
              <p className="text-white text-[18px] font-normal lg:w-[70%] xl:w-[60%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="w-full">
              <div id="dashed" className="mt-3 ml-[-10px] pt-[50px] pr-[171px]  pl-[148px] "/>
              <div id="border" className="pt-[50px] pr-[171px]  pl-[148px]"/>
              
          
            <Image src={'/image.png'} quality={100} width={371} height={465} alt="image" className="relative bottom-[45px]"/>
            </div>

          </div>
          
          <svg className={`z-10 overflow-hidden absolute top-10 lg:left-[890px] xl:left-[1130px]`} width="680" height="700" viewBox="0 0 670 737" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M314.264 736.576C418.922 627.19 576.589 403.059 369.99 381.617C111.74 354.816 257.488 723.138 473.458 660.709C689.427 598.281 771.934 176.004 481.614 56.8005C191.293 -62.4031 44.8139 34.8375 0.98313 118.161" stroke="white" strokeWidth="0.5"/>
            </svg>

      </div>
    </>
  );
}



      {/* <Swiper
                className={`w-[800px] mySwiper`}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper> */}