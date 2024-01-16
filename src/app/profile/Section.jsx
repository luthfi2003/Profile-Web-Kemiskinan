import React from "react"
import Image from "next/image"
import Dampak1 from "@/../public/assets/dampak1.jpg"
import Dampak2 from "@/../public/assets/dampak2.jpg"
import Dampak3 from "@/../public/assets/dampak3.jpg"
import Dampak4 from "@/../public/assets/dampak4.jpg"
import Dampak5 from "@/../public/assets/dampak5.jpg"
import Dampak6 from "@/../public/assets/dampak6.jpg"

const SectionProfile = () => {
  return (
    <div className="w-[80%] mx-auto mt-20">
      <div className="flex justify-center flex-col gap-10">
        <button className="bg-lightBlue rounded-md py-2 w-max m-auto uppercase px-5 font-bold">
          Faktor Kemiskinan
        </button>
        <div className="flex flex-col gap-5">
          <div className="bg-white py-3 text-center">Laju Pertumbuhan Penduduk yang Tinggi</div>
          <div className="bg-white py-3 text-center">Masyarakat Pengangguran Meningkat</div>
          <div className="bg-white py-3 text-center">Pendidikan yang Rendah</div>
          <div className="bg-white py-3 text-center">Terjadi Bencana Alam</div>
          <div className="bg-white py-3 text-center">Distribusi Pendapatan yang Tidak Merata</div>
          <div className="bg-white py-3 text-center">Tingginya Tingkat Fertilitas</div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-10 mt-20 pb-20">
        <button className="bg-lightBlue rounded-md py-2 text-lg w-max m-auto uppercase px-5 font-bold">
          Dampak Masyarakat
        </button>
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-20 bg-white rounded-3xl p-10">
          <div>
            <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
              <Image src={Dampak1} alt="" width={0} height={0} />            
            </div>
              <p className="text-center">Kriminal</p>
          </div>
          <div>
            <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
              <Image src={Dampak2} alt="" width={0} height={0} />
            </div>
              <p className="text-center">Depresi</p>
          </div>
          <div>
            <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
              <Image src={Dampak3} alt="" width={0} height={0} />
            </div>
              <p className="text-center">Konflik</p>
          </div>
          <div>
            <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
              <Image src={Dampak4} alt="" width={0} height={0} />
            </div>
              <p className="text-center">Pengangguran</p>
          </div>
          <div>
            <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
              <Image src={Dampak5} alt="" width={0} height={0} />
            </div>
              <p className="text-center">Sulit akses terhadap pendidikan</p>
          </div>
          <div>
            <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
              <Image src={Dampak6} alt="" width={0} height={0} />
            </div>
              <p className="text-center">Pesimis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionProfile
