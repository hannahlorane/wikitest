var models = require('../models/index');
var Page = models.Page;
var User = models.User;
var Sequelize = require('sequelize');
var chai = require('chai');
var expect = chai.expect;

describe ("the Page model", function () {

  before(function () {
    return User.sync({force:true})
    .then(function() {
      return Page.sync({force:true});
    });
  });

  describe("page properties", function () {
    it("is hooked up to a real postgress db/table");
    it("has a title");
    it("has an urlTitle");
    it("has content");
    it("has a status, which is an enumerable value");
    it("has an array of tags");
  });

//describe("page methods", function () {


  //   var page;
  //   beforeEach(
  //     pageCreator();
  //   );
  //
  //   it("correctly validates urls", function () {
  //     expect(page.route).to.equal('/wiki/test/test');
  //   });
  // });

  // describe("class methods", function () {
  //   beforeEach(function (done) {
  //     pageCreator()
  //   })
  //   .then(function() { done(); } )
  //   .catch(done);
  // });
  //   it("appends /wiki/ to the route");
  //   it("renders content");
  // });

  function pageCreator() {
    return Page.build({
      title: "test test",
      urlTitle:"test/test",
      content: "vides ut stet nive candida",
      tags: ["Latin", "Augustus"]
    });
  }


  var createdPage;
  var foundSimilarArray;
  describe("instanceMethods", function () {

    beforeEach(function (done) {
      createdPage = pageCreator();
      createdPage.findSimilar()
        .then(function(result) {
          foundSimilarArray = result;
          console.log("findSim result: ", foundSimilarArray);
          done();
        });
    });

    it("is not returned by its own findsimilar", function () {
      expect(foundSimilarArray.indexOf(createdPage.id)).to.equal(-1);
    });

    it("gets pages with shared tags");

  });


  var correctPage;
  var goodValidationResult;

  var validator = function() {
                    correctPage.validate()
                      .then(function(result) {
                        goodValidationResult = result;
                      });
                  };

  describe("data validation", function() {

    beforeEach(function(done) {
      correctPage = pageCreator();
      validator();
      done();
    });

    describe("", function() {
      it("Adds a page if all properties are valid", function() {
        expect(goodValidationResult).to.equal(null);
      });
    });

    describe("", function() {
      before(function() {
        correctPage.title = null;
        validator();
      });

      it("Title is not a null value", function() {
        expect(goodValidationResult).to.not.equal(null);
      });
    });

    describe("", function() {
      before(function() {
        correctPage.urlTitle = null;
        validator();
      });

      it("urlTitle is a null value", function() {
        expect(goodValidationResult).not.to.equal(null);
      });
    });

    describe("", function() {
      before(function() {
        correctPage.content = null;
        validator();
      });

      it("checks whether content is null", function() {
        expect(goodValidationResult).not.to.equal(null);
      });
    });

    // describe("", function() {
      // before(function() {
      //   correctPage.status = null;
      // });

      // it("Type of ENUM is (Sequelize) Enumerable", function() {
      // });
    // });

    // describe("", function() {
      // before(function() {
      //   correctPage.tags = null;
      // });

      // it("Type of Tags is 'Array'", function() {
      // });
    // });
  });
});