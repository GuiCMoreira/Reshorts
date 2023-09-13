import fs from "fs"
import ytdl from "ytdl-core"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizando o download do vídeo:", videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000
      if (seconds > 60) {
        throw new Error("A duração desse vídeo é maior que 60 segundos")
      }
    })
    .on("end", () => {
      console.log("Download do vídeo finalizado.")
    })
    .on("error", (Error) => {
      console.log(
        "Não foi possível fazer o download do vídeo. Detalhes do erro:",
        Error
      )
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
