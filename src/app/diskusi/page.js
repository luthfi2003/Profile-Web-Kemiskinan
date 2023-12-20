"use client"

import Image from "next/image"
import { useState } from "react"

const Diskusi = () => {
  const [openAnswer, setOpenAnswer] = useState(false)

  return (
    <div
      className="min-h-[100vh] max-h-full pt-10"
      style={{
        background:
          "linear-gradient(180deg, #766BF7 0%, rgba(118, 107, 247, 0.61) 14.58%, rgba(118, 107, 247, 0.46) 99.99%, rgba(118, 107, 247, 0.00) 100%)",
      }}
    >
      <div className="w-[70%] min-h-[100vh] max-h-full mx-auto">
        <form className="flex flex-col gap-3 bg-purple p-5 rounded-xl">
          <textarea
            placeholder="Ikut berdiskusi..."
            className="border-black border border-1 min-h-[120px] max-h-[120px] p-1 outline-purple"
          />
          <button className="bg-lightBlue text-white py-1 rounded-md">
            Submit
          </button>
        </form>

        <div className="flex gap-3 my-5">
          <div className="w-14 h-14 rounded-full bg-purple">
            {/* <Image src={} alt="" width={0} height={0} /> */}
          </div>
          <div className="w-full">
            <p className="my-2">ini pertanyaannya</p>
            <p
              onClick={() => setOpenAnswer(!openAnswer)}
              className="text-primary cursor-pointer w-max text-sm"
            >
              balas
            </p>
            {openAnswer ? (
              <div className="bg-purple p-2 rounded-md">
                <form className="flex flex-col gap-2">
                  <textarea
                    placeholder="Ikut berdiskusi..."
                    className="border-black border border-1 min-h-[80px] max-h-[80px] p-1 outline-purple"
                  />
                  <button className="bg-lightBlue text-white py-1 rounded-md">
                    Submit
                  </button>
                </form>
              </div>
            ) : null}

            <div className="my-5 flex gap-3">
              <div className="w-14 h-14 rounded-full bg-purple">
                {/* <Image src={} alt="" width={0} height={0} /> */}
              </div>
              <p className="my-2">ini jawabannya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diskusi
