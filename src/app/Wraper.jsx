import Image from "next/image"

const WraperHome = () => {
  return (
    <div className="flex h-[80vh] bg-darkBlue">
      <div className="flex-[1.2] flex flex-col justify-around items-center text-white text-2xl text-center font-bold">
        <div>
          <p>Welcome to </p>
          <p>Profile Kemiskinan di Indonesia</p>
        </div>
        <p>Latar belakang</p>
      </div>
      <div className="bg-lightBlue flex-[0.8] w-full h-full overflow-hidden rounded-l-3xl">
        {/* <Image src={} alt="" width={0} height={0} /> */}
      </div>
    </div>
  )
}

export default WraperHome
