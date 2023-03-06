const express = require("express");
const router = express.Router();

// sendmail library
const sendmail = require("../lib/sendmail");

// sendmail route
router.post("/", express.json(), async (req, res) => {
    // get the emailData form client
    const emailData = req.body;

    // send email
    const {
        status,
        message
    } = await sendmail(emailData);

    console.log(status, message);

    // send the response
    res.send({
        status: status,
        message: message
    });


});

// export the router
module.exports = router;