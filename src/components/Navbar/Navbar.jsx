import Link from "next/link"
import Image from "next/image"

// assets
import Logo from "@/../public/assets/logo.png"

const Navbar = () => {
  return (
    <div className="bg-primary flex items-center justify-around py-2">
      <div className="flex items-center gap-2">
        <div className="bg-lightBlue w-12 h-12 rounded-full overflow-hidden">
          <Image src={Logo} alt="" width={0} height={0} />
        </div>
        <div className="text-xs">
          {/* <p>Logo +</p> */}
          <p>PT INOVASI SUKSES BERSAMA</p>
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
