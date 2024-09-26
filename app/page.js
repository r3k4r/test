'use client';

import one from '@/public/cardItems/one.png';
import two from '@/public/cardItems/two.png';
import three from '@/public/cardItems/three.png';
import four from '@/public/cardItems/four.png';
import five from '@/public/cardItems/five.png';
import six from '@/public/cardItems/six.png';

import Image from 'next/image';

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
  return (
    <>
      <div className="relative w-full flex overflow-hidden items-center justify-center">
        {/* Main container */}
        <div className="flex flex-col w-full h-[818px] bg-[#36a5c1] gap-12 pt-[67px] pr-[171px] pb-[81px] pl-[148px] relative">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-semibold text-white">Uzmanlıklara göre göz atın</h1>
            <p className="text-white text-md font-normal lg:w-[70%] xl:w-[60%] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Content Section */}
          <div className="w-full flex items-center justify-center">
            {/* Doctor's Image and Dashed Border */}
            <div className="mr-[525px]">
                <div id="dashed" className="mt-1 ml-[-10px] pt-[50px] pr-[171px]  pl-[148px] "/>
                <div id="border" className="mt-[-7px] pt-[50px] pr-[171px]  pl-[148px]"/>
                <Image src={'/image.png'} quality={100} width={351} height={445} alt="image" className="relative bottom-[45px]"/>
              </div>

            {/* Card Grid */}
            <div className="absolute left-[615px] grid grid-cols-4 gap-8">
              {cardItems.map((item, index) => (
                <div key={index} className="w-[145px] h-[143px] flex-1 break-inside-avoid border border-white/30 bg-white/30  bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter rounded-[21px] flex flex-col items-center justify-center">
                  <Image src={item.img} quality={100} width={50} height={44} alt="image" />
                  <div className="flex flex-col items-center justify-center mt-2">
                    <h1 className="text-white text-[18px] font-semibold">{item.name}</h1>
                    <p className="text-white text-[12px] font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Background SVG */}
          <svg className="z-10 absolute top-10 lg:left-[890px] xl:left-[1130px]" width="680" height="700" viewBox="0 0 670 737" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.6"
              d="M314.264 736.576C418.922 627.19 576.589 403.059 369.99 381.617C111.74 354.816 257.488 723.138 473.458 660.709C689.427 598.281 771.934 176.004 481.614 56.8005C191.293 -62.4031 44.8139 34.8375 0.98313 118.161"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
