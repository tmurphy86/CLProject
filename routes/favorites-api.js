const express = require('express')


// Requiring our models
let db = require("../models")

let router = express.Router()

router.post("/:postId/:userId", (req,res) =>{

  const favObj = {
    postId: req.params.postId,
    userId: req.params.userId
  }

  if(favObj.userId){

    checkIfInDb(favObj, {action: "toggle"}, (status) =>{

      res.json(status)

    })


  }

})

router.get("/:postId/:userId", (req,res) =>{

  const favObj = {
    postId: req.params.postId,
    userId: req.params.userId
  }

  checkIfInDb(favObj, {action: "query"}, (status) =>{

    if(status){
      res.json(status)
    }


  })

})


module.exports = router;

// Helper Functions
// -------------------------------------------------------------

function checkIfInDb(favObj, actionObj, callback){

  db.favorites.findOne(
    {where: favObj})
    .then(function(favorite){

      if (favorite != null){

        if (actionObj.action === "toggle"){
          favorite.destroy();
          callback({success: {msg: "Post has been removed from your Favorites!"}})
        }

        if (actionObj.action === "query"){
          callback(true) // Post is already favorited by the user.
        }

      } else {

        if (actionObj.action === "toggle"){
          db.favorites.create(favObj)
          .then(function(added){
            callback({success: {msg: "Post has been added to your Favorites!"}})
          })
        }

        if (actionObj.action === "query"){
          callback(false) // Post is already favorited by the user.
        }


      }
    })
  }
