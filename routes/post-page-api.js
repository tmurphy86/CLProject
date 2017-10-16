const express = require('express')
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API
});

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

      let geoLocation = ""

      // Check if the unrequired items are available.
      if (postData.address){
        postObject.address = postData.address;
        geoLocation += " " + postData.address;
      }
      if (postData.location){
        postObject.location = postData.location;
        geoLocation += " " + postData.location;
      }
      if (postData.phone){
        postObject.phone = formatPhoneNumber(postData.phone);
      }
      if (postData.obo){
        postObject.obo = postData.obo;
      }

      geoLocation += " " + postObject.zip;
      postObject.addressString = geoLocation;


      // Geocode an address.
      googleMapsClient.geocode({
        address: `${geoLocation}`
      }, function(err, response) {
        if (!err) {
          postObject.lat = response.json.results[0].geometry.location.lat;
          postObject.lng = response.json.results[0].geometry.location.lng;

          res.json(postObject)

        }
      });


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


function formatPhoneNumber(s) {
  var s2 = (""+s).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}
