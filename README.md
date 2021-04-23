# CoinOpsX Playlist Generator

This is a Typescript application that will generate a `playlist.txt` file for the `uce` files found in the folder specified. The generator is fairly simple and I may improve it to create the playlist_art as well in the future.

## Requirements

This package depends on `Node.js` and `NPM` and was tested using Node `14.16.x` and npm `7.9.0` but may work with other versions.

## How To

- Install NPM and Node.js
- when you are in the application directory, run `$ npm install` to install the node_modules required to run the project.
- Run `$ npm start </Path/To/USC/images> <output-playlist-name>.txt`


Example on macOS: `$ npm start /Volumes/Games\ 1/SNES/CoinopsX\ saUCEd\ SNES\ Edition/UCE SNES.txt`
