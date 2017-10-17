const express = require('express')

// Requiring our models
let db = require("../models")

let router = express.Router()

router.post("/", (req,res) =>{

  console.log(req.body)
  res.json(req.body)
})

module.exports = router;
