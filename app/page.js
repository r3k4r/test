'use client';

import one from '@/public/cardItems/one.png';
import two from '@/public/cardItems/two.png';
import three from '@/public/cardItems/three.png';
import four from '@/public/cardItems/four.png';
import five from '@/public/cardItems/five.png';
import six from '@/public/cardItems/six.png';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const cardItems = [
  { name: 'Urology', title: 'Doctoru', img: one },
  { name: 'Urology', title: 'Doctoru', img: two },
  { name: 'Urology', title: 'Doctoru', img: three },
  { name: 'Urology', title: 'Doctoru', img: three },
  { name: 'Urology', title: 'Doctoru', img: four },
  { name: 'Urology', title: 'Doctoru', img: five },
  { name: 'Urology', title: 'Doctoru', img: five },
  { name: 'Urology', title: 'Doctoru', img: six },
];

export default function Home() {
    const [swiperRef, setSwiperRef] = useState(null);



  return (
    <>
      <div className="relative w-full flex overflow-hidden items-center justify-center">
        {/* Main container */}
        <div className="bg w-full h-fit lg:h-svh gap-12 padding relative">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="head text-3xl sm:text-4xl xl:text-[47px] xl:w-[633px] xl:h-[71px]">Uzmanlıklara göre göz atın</h1>
            <p className="text xl:text-[18px] xl:w-[853px] xl:h-[81px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Content Section */}
          <div className="w-full z-10 pt-24 xl:pt-0 flex flex-col lg:flex-row items-center justify-center">
            {/* Doctor's Image and Dashed Border */}
            <div className="xl:mr-[610px]">
                <div id="dashed" className="z-0 w-[351px] h-[445px] mt-1 ml-[-10px] padding"/>
                <div id="border" className="z-0 w-[351px] h-[445px] mt-[-7px] padding"/>
                <Image src={'/image.png'} quality={100} width={351} height={445} alt="image" className="z-10 relative bottom-[45px]"/>
              </div>

            {/* Card Grid */}
            <div className="xl:absolute z-0 pt-10 lg:pt-0  xl:left-[500px] gap-8">
               <Swiper
                className={`md:w-[600px] xl:w-[800px] xl:left-[0px] lg:max-xl:right-[100px] important bg-transparent`}
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={15}
                grabCursor={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <div className='grid grid-cols-1 gap-8'>
  
                  <div  className="card">
                      <Image src={one} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[0].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[0].title}</p>
                      </div>
                    </div>

                    <div  className="card">
                      <Image src={two} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[1].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[1].title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='grid grid-cols-1 gap-8'>
  
                  <div  className="card">
                      <Image src={one} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[0].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[0].title}</p>
                      </div>
                    </div>

                    <div  className="card">
                      <Image src={two} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[1].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[1].title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='grid grid-cols-1 gap-8'>
  
                  <div  className="card">
                      <Image src={one} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[0].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[0].title}</p>
                      </div>
                    </div>

                    <div  className="card">
                      <Image src={two} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[1].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[1].title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='grid grid-cols-1 gap-8'>
  
                  <div  className="card">
                      <Image src={one} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[0].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[0].title}</p>
                      </div>
                    </div>

                    <div  className="card">
                      <Image src={two} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[1].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[1].title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='grid grid-cols-1 gap-8'>
  
                  <div  className="card">
                      <Image src={one} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[0].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[0].title}</p>
                      </div>
                    </div>

                    <div  className="card">
                      <Image src={two} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[1].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[1].title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='grid grid-cols-1 gap-8'>
  
                  <div  className="card">
                      <Image src={one} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[0].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[0].title}</p>
                      </div>
                    </div>

                    <div  className="card">
                      <Image src={two} quality={100} width={50} height={44} alt="image" />
                      <div className="flex flex-col items-center justify-center mt-3">
                        <h1 className="text-white text-[18px] font-semibold">{cardItems[1].name}</h1>
                        <p className="text-white text-[12px] font-normal">{cardItems[1].title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
          </Swiper>  
              {/* {cardItems.map((item, index) => (
                <div key={index} className="card">
                  <Image src={item.img} quality={100} width={50} height={44} alt="image" />
                  <div className="flex flex-col items-center justify-center mt-2">
                    <h1 className="text-white text-[18px] font-semibold">{item.name}</h1>
                    <p className="text-white text-[12px] font-normal">{item.title}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>

          {/* Background SVG */}
          <svg className="z-10 absolute top-2 xl:top-10 max-lg:hidden lg:left-[890px] xl:left-[1130px] w-[670px] h-[700px]"  viewBox="0 0 670 737" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" d="M314.264 736.576C418.922 627.19 576.589 403.059 369.99 381.617C111.74 354.816 257.488 723.138 473.458 660.709C689.427 598.281 771.934 176.004 481.614 56.8005C191.293 -62.4031 44.8139 34.8375 0.98313 118.161" stroke="white" stroke-width="0.5"/>
          </svg>

        </div>
      </div>
    </>
  );
}


