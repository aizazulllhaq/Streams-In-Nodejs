// if we want to read and write object then we can use objectMode in Streams
// without using objectMode we can not work with objects in streams , without it we can only work with ( string , buffer , arrays )

import { Readable } from 'stream'

const readibleStream = new Readable({

    objectMode: true,

    highWaterMark: 2, // Number of Objects 

    read() { }
});

readibleStream.on("data", (chunk) => {

    console.log("Chunk : ", chunk) // without toString();

});

console.log(readibleStream.push({
    name: "Aizaz Ul haq"
}))



