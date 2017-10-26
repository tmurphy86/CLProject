"use strict";
 var grabPostData = true;
 var postId = true;
 var postData = true;

function grabPostData(postId){

   if(postData){ // <----- If record found.

     function Post(data) {
        this.id = data.id;
        this.name = data.name;
        this.zip = data.zip;
        this.postbody = data.postbody;
        this.price = data.price;
        this.userId = data.userId;
        this.createdAt = data.createdAt;
      };

     const postObject = new Post(postData);

     postObject.id = postData.id;
      postObject.name = postData.name;
      postObject.zip = postData.zip;
      postObject.postbody = postData.postbody;
      postObject.price = postData.price;
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
      return true;

   } else {

     res.json("NO POST FOUND")
      return false;

   }

 }

 module.exports = grabPostData;
