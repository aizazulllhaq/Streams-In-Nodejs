// Create HTTP Server
import http from 'http'
import fs from 'fs'


const server = http.createServer((req, res) => {

    if (req.url !== "/") {

        return res.end();

    }

    // 1 - Downloading big files from Server :
    
    


    // Test file 
    // Bad way : 

    // const file = fs.readFileSync("file.txt");

    // return res.end(file);

    // Good way : 


    // const readibleStream = fs.createReadStream("file.txt");

    // readibleStream.pipe(res);

    // Video file
    // Bad way : 

    // const file = fs.readFileSync("videoPath.mp4");

    // res.writeHead(
    //     200,
    //     {
    //         "Content-Type": "video/mp4"
    //     }
    // );

    // return res.end(file);

    // Good way : 

    // const readibleStream = fs.createReadStream("videoPath.mp4");

    // res.writeHead(
    //     200,
    //     {
    //         "Content-Type": "video/mp4"
    //     }
    // );

    // readibleStream.pipe(res);


    // 2 - Copy big file : 

    // Bad way : 

    // const file = fs.readFileSync("file.txt");

    // fs.writeFileSync("output.txt","file.txt"); // create file ( output.txt ) and insert file.txt data

    // res.end();

    // Good way : 

    const readibleStream = fs.createReadStream("file.txt");

    const writebleStrem = fs.createWriteStream("output");

    readibleStream.on("data",(chunk)=>{

        console.log(chunk.toString()); // data which recive from server chunk by chunk 

        writebleStrem.write(chunk);

    });
});


server.listen(8080, () => {
    console.log("Server Listening on : http://localhost:8080");
})