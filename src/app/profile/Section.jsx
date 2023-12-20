import React from "react"

const SectionProfile = () => {
  return (
    <div className="w-[80%] mx-auto mt-20">
      <div className="flex justify-center flex-col gap-10">
        <button className="bg-lightBlue rounded-md py-2 w-max m-auto uppercase px-5 font-bold">
          Faktor Kemiskinan
        </button>
        <div className="flex flex-col gap-5">
          <div className="bg-white py-3 text-center">Faktor 1</div>
          <div className="bg-white py-3 text-center">Faktor 2</div>
          <div className="bg-white py-3 text-center">Faktor 3</div>
          <div className="bg-white py-3 text-center">Faktor 4</div>
          <div className="bg-white py-3 text-center">Faktor 5</div>
          <div className="bg-white py-3 text-center">Faktor 6</div>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-10 mt-20 pb-20">
        <button className="bg-lightBlue rounded-md py-2 text-lg w-max m-auto uppercase px-5 font-bold">
          Dampak Masyarakat
        </button>
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-20 bg-white rounded-3xl p-10">
          <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
            Dampak 1
          </div>
          <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
            Dampak 1
          </div>
          <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
            Dampak 1
          </div>
          <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
            Dampak 1
          </div>
          <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
            Dampak 1
          </div>
          <div className="bg-black rounded-full w-40 h-40 m-auto flex justify-center items-center text-white">
            Dampak 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionProfile
