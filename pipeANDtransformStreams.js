// Pipe & Transform Stream in Streams

// Transform => can be readible + writable
// Pipe => get readible stream and output will be writable stream , then get readible and output writable so on...

// Create HTTP Server
import http from 'http'
import fs from 'fs'
import { replaceBadWordsProcessing } from './replaceBadWordsProcessor';
import { upperCaseProcessing } from './upperCaseProcessor';
// import { Transform } from 'stream';


const server = http.createServer((req, res) => {

    if (req.url !== "/") {

        return res.end();

    }

    // String Processing

    const readibleStream = fs.createReadStream("file.txt");

    const writableStream = fs.createWriteStream("output.txt");

    // const covnertStringToUpperCaseAndAlsoReplaceBadWords = new Transform({

    //     transform(chunk, encoding, callback) {

    //         console.log("Chunk : ", chunk.toString());

    //         const finalString = chunk.toString().replaceAll(/ipsum/gi, "cool");

    //         callback(null, finalString); // 1st = err ( which is null) , 2nd = return data

    //     }
    // })

    // Using Pipe

    // readibleStream.pipe(covnertStringToUpperCaseAndAlsoReplaceBadWords).pipe(writableStream);

    readibleStream
        .pipe(replaceBadWordsProcessing)
        .on("error", (err) => { // problem when error has been occured in anyOne Processor , solve by ( pipeline )
            console.log(err);
        })
        .pipe(upperCaseProcessing)
        .on("error", (err) => {
            console.log(err);
        })
        .pipe(writableStream)
        .on("error", (err) => {
            console.log(err);
        })


    res.end();
});


server.listen(8080, () => {
    console.log("Server Listening on : http://localhost:8080");
})