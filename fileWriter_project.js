import fs from 'fs'

const writableStream = fs.createWriteStream("logs.txt");

process.stdin.pipe(writableStream);


// How console.log() works

const readibleStream = fs.createReadStream("logs.txt");

readibleStream.pipe(process.stdout);