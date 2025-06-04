// stream -> Continues flow of data
// read, write

const fs = require("fs");

const readStream = fs.createReadStream("dataFile.txt", { encoding: "utf-8" })
const writeStream = fs.createWriteStream("resultFile.txt", { encoding: "utf-8" })

// pipe
// data

// readStream.on("data", (chunk) => {
//     writeStream.write(`CHUNK: ${chunk}`);
// })

readStream.pipe(writeStream);
// error

readStream.on("error", (error) => {
    console.log("Error happend", error.message);
})

// end

readStream.on("end", () => {
    console.log("File reading is completed");
})