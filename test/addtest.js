"use strict";

var should = require("chai").should();
var grabPostData= require("../add.js");
var postData = true;

describe("grabPostData", function() {

 it("should find if items are available", function() {
    grabPostData.should.equal(postData);
  });


  it("should throw an error", function() {
      (function(){
    grabPostData();

     }).should.throw(Error);
  });

 });
