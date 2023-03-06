// express module to run the server
const express = require("express")
const app = express();

// sendmail mail api
const sendmail = require("./apis/sendmail");

app.use((req, res, next) => {

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// endpoint to send an requested email
app.use("/sendmail", sendmail);

// start listener on port 3000
app.listen(3000, () => {
    console.log("API listening on port 3000");
});