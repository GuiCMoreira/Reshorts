const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const videourl = input.value

  if (!videourl.includes("shorts")) {
    return content.textContent = "Este vídeo não parece ser um short"
  } 

  const [_, params] = videourl.split("/shorts/")
  const [videoID] = params.split("?si")
  console.log(videoID)

  content.textContent = "Obtendo o texto do áudio"

  
})
