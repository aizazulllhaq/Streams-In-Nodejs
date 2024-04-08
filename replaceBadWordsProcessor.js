// When working with real-project , then we do like this , create a tranforms in another files then import it , and use this . forExample -> this will be imported in ( pipeANDtransformStreams.js ) file


import { Transform } from 'stream'

const replaceBadWordsProcessing = new Transform({

    transform(chunk, encoding, callback) {

        replaceBadWordsProcessing.emit("error", new Error("Some Error Occured while replacing Bad Words"));

        const finalString = chunk.toString().replaceAll(/ipsum/gi, "cool");

        callback(null, finalString);
    }
});

export { replaceBadWordsProcessing }