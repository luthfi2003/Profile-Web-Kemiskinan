import axios from "axios"

async function getAsk() {
  try {
    const res = await axios.get("http://localhost:5000/ask")
    return res
  } catch (err) {
    throw new Error(err)
  }
}

async function postAsk(data) {
  try {
    const res = await axios.post("http://localhost:5000/ask", data)
    return res
  } catch (err) {
    throw new Error(err)
  }
}

async function getAnswer() {
  try {
    const res = await axios.get("http://localhost:5000/answer")
    return res
  } catch (err) {
    throw new Error(err)
  }
}

async function postAnswer(data) {
  try {
    const res = await axios.post("http://localhost:5000/answer", data)
    return res
  } catch (err) {
    throw new Error(err)
  }
}
export { getAsk, getAnswer, postAsk, postAnswer }
