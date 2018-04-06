var assert = require('assert')
var Record = require('../record.js')

describe('Record', function () {


  var record1;

  beforeEach(function () {
    record1 = new Record("Alan", "Mind Alan", "Acid Jazz", 10);
  });

  it("can get record name", function() {
    assert.strictEqual(record1.artist, "Alan");
  });

  it("can get record title", function() {
    assert.strictEqual(record1.title, "Mind Alan");
  });

  it("can get record genre", function() {
    assert.strictEqual(record1.genre, "Acid Jazz");
  });

  it("can get record price", function() {
    assert.deepStrictEqual(record1.price, 10);
  });

  it("can return all properties of a record as a string", function(){
    assert.strictEqual(record1.allProperties(), "Artist: Alan Title: Mind Alan Genre: Acid Jazz Price: 10");
  });


});
