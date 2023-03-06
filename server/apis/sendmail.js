const express = require("express");
const router = express.Router();

// sendmail library
const sendmail = require("../lib/sendmail");

// sendmail route
router.get("/", (req, res) => {
    res.send(sendmail());
});

// export the router
module.exports = router;