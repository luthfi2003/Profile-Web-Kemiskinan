import Image from "next/image"
import Link from "next/link"

const Layanan = () => {
  return (
    <>
      <div className="bg-lightBlue h-[80vh]">
        {/* <Image src={} alt="" width={0} height={0} /> */}
      </div>
      <div className="h-[80vh]">
        <div className="grid grid-cols-3 -mt-32">
          <div className="bg-primary mx-auto p-5 w-56 rounded-md flex flex-col justify-between gap-5">
            <div className="overflow-hidden w-32 h-32 rounded-full bg-red mx-auto">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p className="text-sm text-center">SOLUSI & PROGRAM PEMERINTAH</p>
            <Link
              href={"solusi"}
              className="bg-lightBlue rounded-md px-3 py-1 text-white text-sm mx-auto"
            >
              learn more
            </Link>
          </div>
          <div className="bg-primary mx-auto p-5 w-56 rounded-md flex flex-col justify-between gap-5">
            <div className="overflow-hidden w-32 h-32 rounded-full bg-red mx-auto">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p className="text-sm text-center">RUANG DISKUSI</p>
            <Link
              href={"diskusi"}
              className="bg-lightBlue rounded-md px-3 py-1 text-white text-sm mx-auto"
            >
              learn more
            </Link>
          </div>
          <div className="bg-primary mx-auto p-5 w-56 rounded-md flex flex-col justify-between gap-5">
            <div className="overflow-hidden w-32 h-32 rounded-full bg-red mx-auto">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <p className="text-sm text-center">KONTAK & KONSULTAN</p>
            <Link
              href={"kontak"}
              className="bg-lightBlue rounded-md px-3 py-1 text-white text-sm mx-auto"
            >
              learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layanan
