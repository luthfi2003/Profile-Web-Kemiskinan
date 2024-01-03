import Image from "next/image"

import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

const Carousel = () => {
  return (
    <div className="bg-purple py-10">
      <div className="text-center w-[70%] mx-auto">
        <p className="text-xl font-bold mb-5">Berita Kemiskinan</p>
        <p className="">
          Berita Kemiskinan Yang ada Di Indonesia
        </p>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        loop={true}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mt-20 w-[90%]"
      >
        <SwiperSlide>
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="flex-[0.8]">
              <p>Judul</p>
              <p className="text-sm">Content</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="flex-[0.8]">
              <p>Judul</p>
              <p className="text-sm">Content</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="flex-[0.8]">
              <p>Judul</p>
              <p className="text-sm">Content</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="flex-[0.8]">
              <p>Judul</p>
              <p className="text-sm">Content</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="flex-[0.8]">
              <p>Judul</p>
              <p className="text-sm">Content</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="flex-[0.8]">
              <p>Judul</p>
              <p className="text-sm">Content</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
