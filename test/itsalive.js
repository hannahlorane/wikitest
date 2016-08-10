var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

describe("Simple Test", function () {
  it ("adds two and two and gets something", function () {
    expect(2+2).to.equal(4);
  });
});

describe("Test waiting time", function() {
  this.timeout(1000);
  it ("Waits the correct amount of time on setTimeout", function(done) {
      expect(setTimeout(done, 800));
  });
});

describe("Spystuff", function() {
  it ("can put a spy on stuff", function () {
    var nums = [1, 2, 3];
    var f = function (x) {console.log(x);}
    f = chai.spy.on(f);
    nums.forEach(f);
    expect(f).to.have.been.called.exactly(3);
  })
});
