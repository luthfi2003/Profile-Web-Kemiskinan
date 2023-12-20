import Image from "next/image"

const Solusi = () => {
  return (
    <div>
      <div className="bg-lightBlue h-[60vh]">
        {/* <Image src={} alt="" width={0} height={0} /> */}
      </div>

      {/* solusi */}
      <div className="flex flex-col my-14">
        <button className="bg-lightBlue rounded-md py-2 w-max m-auto uppercase px-5 my-10 shadow-md text-white">
          solusi
        </button>
        <div className="grid grid-cols-4 bg-primary py-10">
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Solusi 1</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Solusi 2</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Solusi 3</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Solusi 4</p>
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
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Program 1</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Program 2</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Program 3</p>
          </div>
          <div className="text-center">
            <div className="overflow-hidden bg-lightBlue mx-auto w-20 h-20 rounded-full mb-5">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p>Program 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solusi
