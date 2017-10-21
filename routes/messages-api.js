const express = require('express')


// Requiring our models
let db = require("../models")

let router = express.Router()

router.post("/", (req,res) =>{

  const messageObj = req.body;

  sendMessage(messageObj, (result)=>{

    if(result.success){
      res.json(result)
    }

    if(result.error){
      res.json(result)
    }

  })



})



module.exports = router;

// Helper Functions
// -------------------------------------------------------------

function sendMessage(msgObj, callback){

      db.messages.create(msgObj)
      .then(function(sent){

        if (sent){
          callback({success: {msg: "Your message has been sent! Thank you!"}})
        } else {
          callback({error: {msg: "We were unable to send your message at this time. Please try again later!"}})
        }

      })

    }
