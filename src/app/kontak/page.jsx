import Image from "next/image"

const Kontak = () => {
  return (
    <div
      className="h-[100vh] pt-20"
      style={{
        background:
          "linear-gradient(180deg, #766BF7 0%, rgba(118, 107, 247, 0.58) 93.23%, rgba(118, 107, 247, 0.82) 99.99%, rgba(118, 107, 247, 0.00) 100%)",
      }}
    >
      <p className="text-center text-xl text-white uppercase font-bold">
        Hubungi Kami
      </p>
      <div className="grid grid-cols-3 mt-10 bg-primary w-[60%] rounded-xl mx-auto py-10">
        <div className="flex flex-col gap-3">
          <div className="mx-auto w-20 h-20 rounded-full bg-red overflow-hidden">
            {/* <Image src={} alt="" width={0} height={0} /> */}
          </div>
          <p className="text-center">08xxxxxxxxxx</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="mx-auto w-20 h-20 rounded-full bg-red overflow-hidden">
            {/* <Image src={} alt="" width={0} height={0} /> */}
          </div>
          <p className="text-center">namasaya@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="mx-auto w-20 h-20 rounded-full bg-red overflow-hidden">
            {/* <Image src={} alt="" width={0} height={0} /> */}
          </div>
          <p className="text-center">PT UHUY</p>
        </div>
      </div>
    </div>
  )
}

export default Kontak
