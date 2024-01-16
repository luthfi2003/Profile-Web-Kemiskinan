import Image from "next/image"
import BG from "@/../public/assets/bg.jpg"
import Solusi1 from "@/../public/assets/solusi1.jpg"
import Solusi2 from "@/../public/assets/solusi2.jpg"
import Solusi3 from "@/../public/assets/solusi3.jpg"
import Solusi4 from "@/../public/assets/solusi4.jpg"
import Strategi1 from "@/../public/assets/strategi1.jpg"
import Strategi2 from "@/../public/assets/strategi2.jpg"

const Solusi = () => {
  return (
    <div>
      <div className="bg-lightBlue h-[60vh]">
        {/* <Image src={BG} alt="" width={0} height={0} /> */}
      </div>

      {/* solusi */}
      <div className="flex flex-col my-14">
        <button className="bg-lightBlue rounded-md py-2 w-max m-auto uppercase px-5 my-10 shadow-md text-white">
          solusi
        </button>
        <div className="grid grid-cols-4 bg-primary py-10">
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Solusi1} alt="" width={0} height={0} />
            </div>
            <p>Menciptakan Kesadaran</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Solusi2} alt="" width={0} height={0} />
            </div>
            <p>Donasi</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Solusi3} alt="" width={0} height={0} />
            </div>
            <p>Cipatakan Pekerjaan di dunia Game</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Solusi4} alt="" width={0} height={0} />
            </div>
            <p>Akses Sanitasi Layak & Air Bersih</p>
          </div>
        </div>
      </div>

      {/* program */}
      <div className="flex flex-col">
        <button className="bg-lightBlue rounded-md py-2 w-max m-auto uppercase px-5 my-10 shadow-md text-white">
          program pemerintah
        </button>
        <div className="grid grid-cols-4 bg-primary py-10">
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Strategi1} alt="" width={0} height={0} />
            </div>
            <p>Memindahkan Sumberdaya kepada kaum miskin dalam Jumlah yang memadai</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Strategi2} alt="" width={0} height={0} />
            </div>
            <p>Strategi jangka panjang dengan menumbuhkan swadaya setempat.</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Strategi1} alt="" width={0} height={0} />
            </div>
            <p>Pengembangan sistem jaminan sosial</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              <Image src={Strategi2} alt="" width={0} height={0} />
            </div>
            <p>Pengembangan budaya usaha</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solusi
