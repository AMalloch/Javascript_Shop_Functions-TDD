var assert = require('assert')
var Customer = require('../customer.js')
var Record = require('../record.js')
var Store = require('../store.js')

describe('Customer', function () {


  var customer1;
  var record1;
  var record2;
  var store1;

  beforeEach(function () {
    customer1 = new Customer("Mike", 200);
    record1 = new Record("Alan", "Mind Alan", "Acid Jazz", 10);
    record2 = new Record("Adam", "Who?", "Funk", 9);
    store1 = new Store("Gussy's Root'n Toot'n Records", "Glasgow", 20);
    customer1.addRecordToBag(record2);
  });

  it("can add record to customer bag", function() {
    customer1.addRecordToBag(record1);
    assert.deepStrictEqual(customer1.bag, [record2, record1]);
  });

  it("can remove record from bag", function() {
    customer1.removeRecordFromBag(record2);
    assert.deepStrictEqual(store1.inventory, []);
  });

  it("can buy from store", function() {
    customer1.buyRecord(record1);
    assert.deepStrictEqual(customer1.bag, [record2, record1])
    assert.strictEqual(customer1.money, 190)
  });

  it("can sell item to the store", function() {
    customer1.sellRecord(record2);
    assert.deepStrictEqual(customer1.bag, [])
    assert.strictEqual(customer1.money, 209)
  });

  it("can sum value of items in bag", function(){
    assert.strictEqual(customer1.bagItemsTotalValue(), 9);
  });

  it("can sum value of filtered bag items/records by genre", function() {
    customer1.addRecordToBag(record1);
    assert.strictEqual(customer1.filterBagItems("Funk"), 9);
  });

});
