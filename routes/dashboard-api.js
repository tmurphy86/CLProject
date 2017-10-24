const express = require('express');
const moment = require('moment');


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

router.get("/messages/:userId", (req,res) =>{

  const userId = req.params.userId;

  getUsersMessages(userId, (messages) =>{

    if (messages){

      const msgArray = [];

      messages.map(msg => {
        const msgObj = {
          updatedAt: moment(msg.updatedAt).startOf('minute').fromNow(),
          id: msg.id,
          senderId: msg.senderId,
          senderName: msg.senderName,
          receiverId: msg.receiverId,
          receiverName: msg.receiverName,
          messageVal: msg.messageVal,
          postId: msg.postId,
          postTitle: msg.postTitle
        }
        msgArray.push(msgObj)
      })

      res.json(msgArray)
    }

  })

})


router.get("/posts/:userId", (req,res) =>{

  const userId = req.params.userId;

  getUsersPosts(userId, (postData)=>{

    if (postData){

      const postArray = [];

      postData.map(post => {

        const postObj = {
          id: post.id,
          categoryId: post.categoryId,
          userId: post.userId,
          updatedAt: moment(post.updatedAt).startOf('minute').fromNow(),
          title: post.name,
          price: post.price
        }

        postArray.push(postObj)

      })

      res.json(postArray)

    }

  })

})

router.delete('/posts/delete/:userId/:postId', (req,res) =>{

  const postObj = {
    userId: req.params.userId,
    id: req.params.postId
  }

  deletePost(postObj, (status)=>{

    if (status){
      res.json(status)
    } else {
      res.json("error")
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

  function getUsersMessages(userId, callback){

    db.messages.findAll(
      {where: {
        receiverId:userId
      }, order: [['updatedAt', 'DESC']]}
    )
      .then(function(messages){

        if (messages != null){
          callback(messages)
        } else {
          callback(false)
        }
      })

    }


    function getUsersPosts(userId, callback){

      db.post.findAll(
        {where: {
          userId:userId
        }, order: [['updatedAt', 'DESC']]}
      )
        .then(function(posts){

          if (posts != null){
            callback(posts)
          } else {
            callback(false)
          }
        })

      }


    function deletePost(obj, callback) {

      db.post.findOne(
        {where: obj }
      )
        .then(function(status){
          if (status != null){
            status.destroy();
            callback({success: {msg: "Post has been removed!"}})
          } else {
            callback(false)
          }
        })

    }
