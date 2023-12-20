import Image from "next/image"

const About = () => {
  return (
    <>
      <div className="w-full h-[60vh] bg-darkBlue overflow-hidden">
        {/* <Image src={} alt="" width={0} height={0} /> */}
      </div>
      <div
        className="flex h-[100vh] p-[7%] "
        style={{
          background:
            "linear-gradient(180deg, #766BF7 0%, rgba(118, 107, 247, 0.67) 39.06%, rgba(118, 107, 247, 0.27) 99.99%, rgba(118, 107, 247, 0.00) 100%)",
        }}
      >
        <div className="flex-1">
          <p className="text-2xl mb-5">Tentang Kami</p>
          <p className="">Penjelasan tentang PT</p>
        </div>
        <div className="bg-primary w-52 h-52 rounded-xl">
          {/* <Image src={} alt="" width={0} height={0} /> */}
        </div>
      </div>
    </>
  )
}

export default About
