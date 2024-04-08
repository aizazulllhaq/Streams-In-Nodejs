import { Transform } from 'stream'

const upperCaseProcessing = new Transform({

    transform(chunk, encoding, callback) {

        upperCaseProcessing.emit("error", new Error("Some Error Occured while convert to upperCase"));

        const upperCaseString = chunk.toString().toUpperCase();

        callback(null, upperCaseString);

    }
});

export { upperCaseProcessing }