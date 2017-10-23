const express = require('express')


// Requiring our models
let db = require("../models")

let router = express.Router()

router.get("/favorites/:userId", (req,res) =>{

  const userId = req.params.userId;

  getAllTheFavoritesId(userId, (favs)=>{

    if(favs){

      getTheFavoritePostsData(favs, (postData)=>{

        const favoritedPosts = []

        postData.map(post => {

          const postObj = {
            id:post.id,
            name:post.name,
            price:post.price,
            category:post.categoryId
          }

          favoritedPosts.push(postObj)

        })

        res.json(favoritedPosts)

      })
    }



  })


})


module.exports = router;

// Helper Functions
// -------------------------------------------------------------

function getAllTheFavoritesId(userId, callback){

  db.favorites.findAll(
    {where: {
      userId:userId
    }, order: [['createdAt', 'DESC']]}
  )
    .then(function(favorites){

      if (favorites != null){

        callback(favorites)

      } else {
        callback(false)
      }
    })
  }

  function getTheFavoritePostsData(favs, callback){

    const postArr = [];

    favs.map((fav) => {

      db.post.findOne({where: {id:fav.postId}})
      .then(function(data){

        if (data != null){
          postArr.push(data)
          if (postArr.length === favs.length){
            callback(postArr)
          }
        }

      })

    })






  }
