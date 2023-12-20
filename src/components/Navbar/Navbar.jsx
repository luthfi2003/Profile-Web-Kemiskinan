import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="bg-primary flex items-center justify-around py-2">
      <div className="flex items-center gap-2">
        <div className="bg-lightBlue w-12 h-12 rounded-full">
          {/* <Image src={} alt="" width={0} height={0} /> */}
        </div>
        <div className="text-xs">
          <p>Logo +</p>
          <p>Nama PT</p>
        </div>
      </div>
      <div className="flex items-center gap-12">
        <Link href={"/"}>Home</Link>
        <Link href={"profile"}>Profile</Link>
        <Link href={"layanan"}>Layanan</Link>
        <Link href={"about"}>About</Link>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Navbar
