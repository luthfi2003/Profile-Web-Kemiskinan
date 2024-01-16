import Image from "next/image"
import Foto from "@/../public/assets/3337216.jpg"

const WraperHome = () => {
  return (
    <div className="flex h-[80vh] bg-darkBlue">
      <div className="flex-[1.2] flex flex-col justify-around items-center text-white text-2xl text-center font-bold">
        <div>
          <p>Selamat datang di Website Profil Kemiskinan di Indonesia</p>
          <p className="text-center text-base font-normal">ruang online yang didedikasikan untuk menggambarkan realitas kemiskinan di Indonesia. Kami adalah komunitas yang berkomitmen untuk menyuarakan suara yang sering kali terpinggirkan, dan merangkul semangat perubahan untuk menciptakan dampak positif di tengah tantangan kemiskinan yang dihadapi oleh sebagian masyarakat kita.</p>
        </div>

        <div>
          <h2>Latar belakang</h2>
          <p className="text-base text-center font-normal">
            Kami adalah komunitas yang berkomitmen untuk mengatasi isu kemiskinan yang ada di berbagai belahan dunia. 
            Memahami bahwa kemiskinan memiliki dampak mendalam pada kehidupan individu dan masyarakat, kami berusaha untuk menciptakan kesadaran, memobilisasi sumber daya, 
            dan memberikan dukungan kepada mereka yang terpinggirkan oleh kondisi ekonomi yang sulit.
          
          </p>
        </div>      
      </div>
      <div className="bg-lightBlue flex-[0.8] w-full h-full overflow-hidden rounded-l-3xl">
        <Image src={Foto} alt="" width={0} height={0} />
      </div>
    </div>
  )
}

export default WraperHome
