import Image from "next/image"
import BG from "@/../public/assets/bg.jpg"
import BGP from "@/../public/assets/bgp.jpg"

const About = () => {
  return (
    <>
      <div className="w-full h-[60vh] bg-darkBlue overflow-hidden">
        <Image src={BG} alt="" width={0} height={0} />
      </div>
      <div
        className="flex h-[100vh] p-[7%] "
        style={{
          background:
            "linear-gradient(180deg, #766BF7 0%, rgba(118, 107, 247, 0.67) 39.06%, rgba(118, 107, 247, 0.27) 99.99%, rgba(118, 107, 247, 0.00) 100%)",
        }}
      >
        <div className="flex-1">
          <h1 className="text-2xl mb-5">Tentang Kami</h1>
          <h2 className="text-bold font-bold">Visi</h2>
          <p className="">
            Visi kami adalah menginspirasi perubahan positif melalui pemahaman mendalam tentang realitas kemiskinan. 
            Kami percaya bahwa pengetahuan adalah kunci untuk menciptakan kesadaran, dan kesadaran adalah langkah pertama menuju aksi yang berkelanjutan. 
            Melalui Website Profil Kemiskinan di Indonesia, kami berharap mampu menyampaikan informasi yang objektif, menyentuh hati, dan merangsang pikiran, 
            sehingga masyarakat dapat bersatu dalam upaya mengatasi tantangan kemiskinan.
          </p>
          <h2 className="text-bold font-bold">Misi</h2>
          <p>
            Misi Kami
            Edukasi dan Kesadaran
            Menghadirkan Kisah Nyata
            Mendorong Keterlibatan Sosial
            Menyediakan Sumber Daya Berguna
          </p>
        </div>
        <div className="bg-primary w-52 h-52 rounded-xl">
          <Image src={BGP} alt="" width={0} height={0} />
        </div>
      </div>
    </>
  )
}

export default About
