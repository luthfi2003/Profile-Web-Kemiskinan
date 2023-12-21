"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// api
import { getAsk, getAnswer, postAsk, postAnswer } from "@/modules/fetch/index"

const Diskusi = () => {
  const [dataAsk, setDataAsk] = useState({})
  const [dataAnswer, setDataAnswer] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const askRes = await getAsk()
        const answerRes = await getAnswer()

        const formattedAskData = askRes.data.reduce(
          (acc, value) => ({
            ...acc,
            [value.id]: { ...value, openAnswer: false },
          }),
          {}
        )

        setDataAsk(formattedAskData)
        setDataAnswer(answerRes.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const handleToggleAnswer = (id) => {
    setDataAsk((prevData) => ({
      ...prevData,
      [id]: { ...prevData[id], openAnswer: !prevData[id].openAnswer },
    }))
  }

  const handleSubmitAsk = async (e) => {
    e.preventDefault()

    try {
      await postAsk({
        ask: e.target.ask.value,
      })
      // Setelah pengajuan pertanyaan, langsung perbarui dataAsk
      const updatedAskRes = await getAsk()
      const updatedFormattedAskData = updatedAskRes.data.reduce(
        (acc, value) => ({
          ...acc,
          [value.id]: { ...value, openAnswer: false },
        }),
        {}
      )

      setDataAsk(updatedFormattedAskData)

      e.target.ask.value = ""
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmitAnswer = async (e, askId) => {
    e.preventDefault()

    try {
      // Post jawaban
      const response = await postAnswer({
        answer: e.target.answer.value,
        askId: askId,
      })

      // Pastikan respons dari API menyertakan data jawaban
      const newAnswer = response.data

      // Menutup formulir jawaban
      setDataAsk((prevData) => ({
        ...prevData,
        [askId]: { ...prevData[askId], openAnswer: false },
      }))

      // Menambahkan jawaban baru ke dataAnswer
      setDataAnswer((prevData) => [...prevData, newAnswer])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className="min-h-[100vh] py-10"
      style={{
        background:
          "linear-gradient(180deg, #766BF7 0%, rgba(118, 107, 247, 0.61) 14.58%, rgba(118, 107, 247, 0.46) 99.99%, rgba(118, 107, 247, 0.00) 100%)",
      }}
    >
      <div className="w-[70%] min-h-[100vh] max-h-full mx-auto">
        <form
          onSubmit={handleSubmitAsk}
          className="flex flex-col gap-3 bg-purple p-5 rounded-xl"
        >
          <textarea
            name="ask"
            placeholder="Ikut berdiskusi..."
            className="border-black border border-1 min-h-[120px] max-h-[120px] p-1 outline-purple"
          />
          <button
            type="submit"
            className="bg-lightBlue text-white py-1 rounded-md"
          >
            Submit
          </button>
        </form>

        {Object.values(dataAsk).map((askValue) => (
          <div key={askValue.id} className="flex gap-3 my-5">
            <div className="w-14 h-14 rounded-full bg-purple">
              {/* <Image src={} alt="" width={0} height={0} /> */}
            </div>
            <div className="w-full">
              <p className="my-2">{askValue.ask}</p>
              <p
                onClick={() => handleToggleAnswer(askValue.id)}
                className="text-primary cursor-pointer w-max text-sm"
              >
                balas
              </p>
              {askValue.openAnswer ? (
                <div className="bg-purple p-2 rounded-md">
                  <form
                    onSubmit={(e) => handleSubmitAnswer(e, askValue.id)}
                    className="flex flex-col gap-2"
                  >
                    <textarea
                      name="answer"
                      placeholder="Ikut berdiskusi..."
                      className="border-black border border-1 min-h-[80px] max-h-[80px] p-1 outline-purple"
                    />
                    <button className="bg-lightBlue text-white py-1 rounded-md">
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}
              {dataAnswer
                .filter((answerValue) => answerValue.id === askValue.id)
                .map((filteredAnswer) => (
                  <div key={filteredAnswer.id} className="my-2 flex gap-3">
                    <div className="w-14 h-14 rounded-full bg-purple">
                      {/* <Image src={} alt="" width={0} height={0} /> */}
                    </div>
                    <p className="my-2">{filteredAnswer.answer}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Diskusi
