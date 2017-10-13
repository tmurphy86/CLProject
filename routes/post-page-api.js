const express = require('express')

// Requiring our models
let db = require("../models")

let router = express.Router()

router.get("/:id", (req, res)=>{

  const postId = parseInt(req.params.id);

  console.log("-------------------------------------", postId)

  grabPostData(postId, (postData)=>{

    if(postData){ // <----- If record found.

      function Post(id, name, zip, postbody, price, userId, createdAt) {
        this.id = id;
        this.name = name;
        this.zip = zip;
        this.postbody = postbody;
        this.price = price;
        this.userId = userId;
        this.createdAt = createdAt;
      };

      const postObject = new Post();

      postObject.id = postData.id;
      postObject.name = postData.name;
      postObject.zip = postData.zip;
      postObject.postbody = postData.postbody;
      postObject.price = "$"+numberWithCommas(postData.price);
      postObject.userId = postData.userId;
      postObject.createdAt = postData.createdAt;

      // Check if the unrequired items are available.
      if (postData.address){
        postObject.address = postData.address;
      }
      if (postData.location){
        postObject.location = postData.location;
      }
      if (postData.phone){
        postObject.phone = postData.phone;
      }
      if (postData.obo){
        postObject.obo = postData.obo;
      }

      res.json(postObject)

    } else {

      res.json("NO POST FOUND")

    }



  })

})


module.exports = router;


// Helper Functions
// -------------------------------------------------------------

function grabPostData(id, callback){

  db.post.findOne({
    where:{
      id: id
    }
  }).then(function(post){

    if (post != null){
      callback(post)
    } else {
      callback(false)
    }

  });

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
