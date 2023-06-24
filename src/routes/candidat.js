const express = require("express");
const router = express.Router();

//une route pour récupérer tous les candidats
router.get("/candidates/get",(req,res)=> {
    res.send("hello");
});

module.exports= router;