import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const videourl = input.value

  if (!videourl.includes("shorts")) {
    return (content.textContent = "Este vídeo não parece ser um short")
  }

  const [_, params] = videourl.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do áudio"

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = transcription.data.result
})
