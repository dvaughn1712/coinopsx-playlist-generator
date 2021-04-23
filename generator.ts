
import * as fs from 'fs'
import { isNil } from 'lodash'

function main(): Promise<string> {

  const folder = process.argv.slice(2)[0]
  const playlistName = process.argv.slice(3)[0]

  if (playlistName.trim() === '') {
    console.error("Playlist name was not specified as the second parameter")
    return
  }

  let playlist = ""

  return new Promise((resolve, reject) => {
    fs.readdir(folder, (error, files) => {
      if (isNil(files)) {
        reject(`No files found for directory ${folder}`)
        return
      }
      if (error) {
        reject(error)
      }

      files.forEach(file => {
        let gameName = file
        if (file.length > 4 && gameName.substring(file.length - 4, file.length).toLowerCase() === '.uce') {
          if (file.substring(0, 2) === '._') {
            return
          }
          gameName = gameName.slice(0, -4).trimEnd()
        }
        playlist += gameName + "\n"
      })
      fs.writeFile(__dirname + `/${playlistName}`, playlist, (error) => {
        if (error) {
          reject(error)
        }
        resolve(playlistName)
      })
    })
  })
}

main().then(playlistName => {
  console.log(`File "${playlistName}" saved`)
}).catch(error => {
  console.error(error)
})