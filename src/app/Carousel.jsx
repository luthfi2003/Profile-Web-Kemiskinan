import Image from "next/image"
import Berita1 from "@/../public/assets/berita1.jpeg"
import Berita2 from "@/../public/assets/berita2.jpeg"
import Berita3 from "@/../public/assets/berita3.jpeg"
import Berita4 from "@/../public/assets/berita4.jpeg"
import Berita5 from "@/../public/assets/berita5.png"
import Berita6 from "@/../public/assets/berita6.jpeg"

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
          <a href="https://www.cnbcindonesia.com/news/20230717124622-4-454971/bps-orang-miskin-terbanyak-di-jawa-terendah-di-kalimantan" target="_blank">
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              <Image src={Berita1} alt="" width={0} height={0} />
            </div>
            <div className="flex-[0.8]">
              <h1>BPS: Orang Miskin Terbanyak di Jawa, Terendah di Kalimantan</h1>
              <p className="text-xs">Persentase penduduk miskin di Indonesia mengalami penurunan pada Maret 2023. Pada bulan tersebut, (BPS) menghitung persentase penduduk miskin mencapai sebesar 9,36% atau mencapai 25,9 juta orang.</p>
            </div>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cnbcindonesia.com/news/20231109164736-4-487772/bps-kemiskinan-ekstrem-turun-di-semua-provinsi-papua-no1" target="_blank">
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              <Image src={Berita2} alt="" width={0} height={0} />
            </div>
            <div className="flex-[0.8]">
              <h1>BPS: Kemiskinan Ekstrem Turun di Semua Provinsi, Papua No.1</h1>
              <p className="text-xs">BPS mencatat tingkat kemiskinan ekstrem mengalami penurunan, Salah satu provinsi yang mengalami penurunan paling banyak adalah Papua.</p>
            </div>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cnbcindonesia.com/news/20231106114649-4-486667/duh-786-juta-orang-ri-masih-jadi-pengangguran" target="_blank">
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              <Image src={Berita3} alt="" width={0} height={0} />
            </div>
            <div className="flex-[0.8]">
              <h1>Duh! 7,86 Juta Orang RI Masih Jadi Pengangguran</h1>
              <p className="text-xs">(BPS) mengumumkan pengangguran di Indonesia sebesar 7,86 juta orang per Agustus 2023, turun 560 ribu orang dibandingkan periode yang sama tahun sebelumnya.</p>
            </div>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cnbcindonesia.com/news/20231017115622-4-481203/apbn-2024-bentuk-komitmen-pemerintah-turunkan-kemiskinan" target="_blank">
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              <Image src={Berita4} alt="" width={0} height={0} />
            </div>
            <div className="flex-[0.8]">
              <h1>APBN 2024 Bentuk Komitmen Pemerintah Turunkan Kemiskinan</h1>
              <p className="text-xs">Pemerintah sangat serius dan telah memiliki target untuk penghapusan kemiskinan ekstrem melalui berbagai program perlindungan sosial dan pemberdayaan</p>
            </div>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cnbcindonesia.com/news/20230926123318-4-475604/apbn-ciptakan-ekonomi-inklusif-turunkan-angka-kemiskinan-ri" target="_blank">
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              <Image src={Berita5} alt="" width={0} height={0} />
            </div>
            <div className="flex-[0.8]">
              <h1>APBN Ciptakan Ekonomi Inklusif, Turunkan Angka Kemiskinan RI</h1>
              <p className="text-xs">Pemerintah optimis dapat menurunkan tingkat kemiskinan secara signifikan pada 2024 ke level 6,5-7,5%. Seiring dengan penciptaan ekonomi yang inklusif melalui (APBN).</p>
            </div>
          </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cnbcindonesia.com/news/20230810075655-4-461697/ekonomi-ri-tumbuh-tinggi-orang-miskin-bisa-berkurang" target="_blank">
          <div className="bg-primary flex flex-col gap-2 p-2 h-64 rounded-md">
            <div className="flex-[1.2] bg-lightBlue w-full h-full rounded-md overflow-hidden">
              <Image src={Berita6} alt="" width={0} height={0} />
            </div>
            <div className="flex-[0.8]">
              <h1>Ekonomi RI Tumbuh Tinggi, Orang Miskin Bisa Berkurang?</h1>
              <p className="text-xs">Tingkat pertumbuhan ekonomi Indonesia yang terus terjaga di level atas 5 persen selama tujuh kuartal berturut-turut mampu menekan tingkat kemiskinan masyarakat.</p>
            </div>
          </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
