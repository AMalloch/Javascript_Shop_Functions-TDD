var assert = require('assert')
var Store = require('../store.js')
var Record = require('../record.js')

describe('Store', function () {


  var store1;
  var record1;
  var record2;

  beforeEach(function () {
    store1 = new Store("Gussy's Root'n Toot'n Records", "Glasgow", 0);
    record1 = new Record("Alan", "Mind Alan", "Acid Jazz", 10);
    record2 = new Record("Adam", "Who?", "Funk", 9);
    record3 = new Record("Daniel O'Donnell", "My best pal Jesus", "Ancient", 5);
    store1.addRecord(record1);
    store1.addRecord(record2);
  });

  it("can get store name", function() {
    assert.strictEqual(store1.name, "Gussy's Root'n Toot'n Records");
  });

  it("can get store city", function() {
    assert.strictEqual(store1.city, "Glasgow");
  });

  it("can get store city", function() {
    assert.strictEqual(store1.balance, 0);
  });

  it("can add record to the store inventory", function() {
    store1.addRecord(record3);
    assert.deepStrictEqual(store1.inventory, [record1, record2, record3]);
  });

  it("can display all objects in an array", function(){
    assert.deepStrictEqual(store1.recordList(), [record1, record2]);
  });


});
