import { Readable, Writable } from 'stream'

// Custom Readible Stream

const readibleStream = new Readable({

    highWaterMark: 5,  // how many number of bites we accept ( buffer size ) buffer = memory space
    // if number of bytes equal or greater then 5 , then they return false , if less then 5 they return true

    read() { }
});

// Custom Writable Stream

const writableStream = new Writable({

    highWaterMark: 3,

    write(s) {

        console.log("Data writing : ", s.toString());

    }
});

readibleStream.on("data", (chunk) => {

    console.log("Data reading", chunk.toString());

    writableStream.write(chunk);    

});

console.log(readibleStream.push("Some Text Insert in readibleStream")); // return ( true, false)

// if (readibleStream.push("some inserting text")) {
//     console.log("good size");
// } else {
//     console.log("please insert less then 5 bytes")
// }


// Custom Writeble Stream

// const writableStream = new Writable({

//     highWaterMark: 3,

//     write(s) {

//         console.log("Data : ", s.toString());

//     }
// });

// // console.log(writableStream.write("hello"))
// writableStream.write("hello");