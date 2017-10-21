const express = require('express')
const moment = require('moment')

// Requiring our models
let db = require("../models")

let router = express.Router()

router.get("/:query", (req,res) =>{

  const searchQuery = req.params.query;

  grabPosts(searchQuery, (posts) =>{

    console.log(posts)
    if(posts){

      const postsArray = [];

      posts.map(post => {
        const postObj = {
          id: post.id,
          name: post.name,
          price: numberWithCommas(post.price),
          date: moment(post.createdAt).startOf('minute').fromNow()
        }
        postsArray.push(postObj)
      })
      console.log(postsArray)
      res.json(postsArray)

    } else {postsArray
      /// NO DATA FOUND OR RETURNED
    }

  })

})



module.exports = router;

// Helper Functions
// -------------------------------------------------------------

function grabPosts(query, callback){

  db.post.findAll({
    where:{
      $or: {
        postbody: {
          $like: '%' + query + '%'
        },
        name: {
          $like: '%' + query + '%'
        }
      }
    },
    order: [['createdAt', 'DESC']]
  })
  .then(function(posts){

    if (posts != null){
      callback(posts)
    } else {
      callback(false)
    }

  });

}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
