const express = require('express')


// Requiring our models
let db = require("../models")

let router = express.Router()

router.post("/:id", (req,res) =>{

  const postId = req.params.id;
  const userId = "1"; //  <<<<<<<<<<<<<<<<<<<<<<<<<< CHANGE LATER

  if(userId){

    addToFavorites(postId, userId, (favStatus)=>{

      if (favStatus.warning){
        res.json(favStatus)
      }

      if (favStatus.success){
        res.json(favStatus)
      }

    })

  } else {
    res.json({warning:{msg:"You must be logged in to Favorite a post."}})
  }


})



module.exports = router;

// Helper Functions
// -------------------------------------------------------------

function addToFavorites(postId, userId, callback){

  db.favorites.findOne(
    {where:
      {
        postId:postId,
        userId:userId
      }
    })
   .then(function(favorite){

    if (favorite != null){
      callback({warning:{msg: "You've already favorited this post!"}})
    } else {

      db.favorites.create(
        {
          userId:userId,
          postId:postId
        }
      )
      .then(function(added){
        callback({success: {msg: "Post has been added to your Favorites!"}})
      })

    }

  });

}
