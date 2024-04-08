// Create HTTP Server
import http from 'http'
import fs from 'fs'


const server = http.createServer((req, res) => {

    if (req.url !== "/") {

        return res.end();

    }

    // String Processing

    const readibleStream = fs.createReadStream("file.txt");

    const writableStream = fs.createWriteStream("output.txt");

    // Readible Stream ( Reading Data )
    readibleStream.on("data",(chunk)=>{

        console.log("Data Reading : ",chunk.toString());

        // Process String

        // first read data then convert all words in file into upperCase & also replace "ipsum" to "cool" ; like ( removing bad words from file);
        const finalString = chunk.toString().replaceAll(/ipsum/gi,"cool").toUpperCase(); 

        // Writable Stream ( Write String )
        writableStream.write(finalString);

    });


    res.end();
    
});


server.listen(8080, () => {
    console.log("Server Listening on : http://localhost:8080");
})