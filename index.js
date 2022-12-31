const fs = require("fs");
const date = new Date();
const dates = `Current date and time ${date}`
require('dotenv').config()


fs.writeFile(`./textstorage/${date.getDate()}-${date.getMonth()}-${date.getFullYear()} Time ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`, dates, (err) => { console.log("Completed") })

//created express server
const express = require("express");
const app = express();

const PORT = (process.env.PORT);
app.get("/", function (request, response) {
    (fs.writeFile(`./textstorage/${date.getDate()}-${date.getMonth()}-${date.getFullYear()} Time ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`, dates, (err) => {
        console.log("Current time and date txt file created")
    }))
    response.send({ message: "file created please check folder" });
});





app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));