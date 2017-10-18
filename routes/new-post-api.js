const express = require('express')
const validator = require('validator');



// Requiring our models
let db = require("../models")

let router = express.Router()

router.post("/", (req,res) =>{

  const p = req.body;

  const errors = [];

  if(validator.isEmpty(p.postTitle)){errors.push({error: "Title is a required field"})}

  if(validator.isEmpty(p.postBody)){errors.push({error: "Post Body is a required field"})}

  if(validator.isEmpty(p.postCategory)){errors.push({error: "Category is a required field"})}

  if(validator.isEmpty(p.postPrice)){errors.push({error: "Price is a required field"})}
  else if(!validator.isFloat(p.postPrice)){errors.push({error: "Invalid Price. Must be a valid number. No need to include commas."})}

  if(validator.isEmpty(p.postZip)){errors.push({error: "Zip Code is a required field"})}

  if(!validator.isPostalCode(p.postZip, "US")){errors.push({error: "Invalid Zip Code"})}

  if (p.postPhone){
    if(!validator.isNumeric(p.postPhone)){errors.push({error: "Invalid Phone Number"})}
    else if(!validator.isLength(p.postPhone, {min:10, max:10})){errors.push({error: "Invalid Phone Number"})}
  }


  const errorObj = {errors}

  if (errors.length > 0){

    // Return Validation Errors
    res.json(errorObj)

  } else {

    //Post to DB
    const Post = function(name,zip,postbody,price,obo,userId,categoryId){
      this.name = name;
      this.zip = zip;
      this.postbody = postbody;
      this.price = price.replace(',', '');
      this.obo = obo;
      this.userId = userId;
      this.categoryId = categoryId;
    }

    const newPost = new Post(p.postTitle, p.postZip, p.postBody, p.postPrice, p.postObo, "1", p.postCategory);

    if(p.postPhone){newPost.phone = p.postPhone}

    let addressString = "";

    if(p.postStreetAddress){addressString += " " + p.postStreetAddress};
    if(p.postCity){
      addressString += " " + p.postCity;
      newPost.location = p.postCity;
    };
    if(p.postState){addressString += " " + p.postState};

    if(addressString){newPost.address = addressString.trim()}

    createNewPost(newPost, (data)=>{

      if(data){
        res.json("success")
      }

    })

  }


})

module.exports = router;


// Helper Functions
// -------------------------------------------------------------

function createNewPost(obj, callback){

  db.post.create(obj)
  .then(function(data){
    callback(data)
  }).catch(function (err) {
    console.log(err)
    callback("error")
  });

}
