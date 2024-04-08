import express from 'express';
import status from 'express-status-monitor'
import fs from 'fs'


const app = express();
app.use(status());

app.get('/createFile', (req, res) => {

    fs.writeFile("file.txt", "Some Random Text", (err, data) => {
        if (err) console.log("err", err);
    })

    res.send("created")

})

// Without Streams
// Serving file to user , but if we have a file size of 500mb and 100 of users request on it , then there problem will be come , our memory or cpu use more and more which cause server full or crash 
// app.get("/getLongFile", (req, res) => {
//     fs.readFile("file.txt", 'utf-8', (err, data2) => {
//         console.log("first", data2);
//         res.send(data2)
//     })
// })

// With Streams 
app.get('/getLong', (req, res) => {

    const stream = fs.createReadStream("file.txt", "utf-8");
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end());

})

app.listen(8081, () => {
    console.log(`Server started on 8080`);
});