const fs = require("fs");
const date = new Date();
const dates = `Current date and time ${date}`


fs.writeFile(`./textstorage/${date.getDate()}-${date.getMonth()}-${date.getFullYear()} Time ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`, dates, (err) => { console.log("Completed") })

//created express server
const express = require("express");
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
    response.send(fs.writeFile(`./textstorage/${date.getDate()}-${date.getMonth()}-${date.getFullYear()} Time ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`, dates, (err) => { console.log("Current time and date txt file created") })
    );
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));