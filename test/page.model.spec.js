var models = require('../models/index');
var Sequelize = require('sequelize');
var chai = require('chai');
var expect = chai.expect;

describe ("the Page model", function () {
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
  //   .then(() => done())
  //   .catch(done);
  // });
  //   it("appends /wiki/ to the route");
  //   it("renders content");
  // });

  function pageCreator() {
    return models.Page.build({
      urlTitle:"test/test",
      content: "vides ut stet nive candida",
      tags: ["Latin", "Augustus"]
    });
  };

  var p;
  var sim;
  describe("instanceMethods", function () {

    before(function () {
      return Page.sync();
    });

    beforeEach(function (done) {
      p = pageCreator();
      sim = p.findSimilar();
      console.log(sim);
      done();
    });
    it("is not returned by its own findsimilar", function (done) {
      expect(sim.indexOf(p.id)).to.equal(-1);
    });
    it("gets pages with shared tags");
  });
});
