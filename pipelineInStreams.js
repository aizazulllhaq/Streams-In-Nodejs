// Pipe & Transform Stream in Streams

// Transform => can be readible + writable
// Pipe => get readible stream and output will be writable stream , then get readible and output writable so on...

// Create HTTP Server
import http from 'http'
import fs from 'fs'
import { replaceBadWordsProcessing } from './replaceBadWordsProcessor.js';
import { upperCaseProcessing } from './upperCaseProcessor.js';
import { pipeline } from 'stream';
// import { Transform } from 'stream';


const server = http.createServer((req, res) => {

    if (req.url !== "/") {

        return res.end();

    }

    // String Processing

    const readibleStream = fs.createReadStream("file.txt");

    const writableStream = fs.createWriteStream("output.txt");

    pipeline(
        readibleStream,
        replaceBadWordsProcessing,
        upperCaseProcessing,
        writableStream,

        (err) => {
            if(err){
                console.log(err);
            }
        }
    );


    res.end();
});


server.listen(8080, () => {
    console.log("Server Listening on : http://localhost:8080");
})