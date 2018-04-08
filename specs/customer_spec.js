var assert = require('assert')
var Customer = require('../customer.js')
var Record = require('../record.js')

describe('Store', function () {


  var customer1;
  var record1;

  beforeEach(function () {
    customer1 = new Customer("Mike", 200);
    record1 = new Record("Alan", "Mind Alan", "Acid Jazz", 10);
  });

  it("can add record to customer bag", function() {
    customer1.addRecordToBag(record1);
    assert.deepStrictEqual(customer1.bag, [record1]);
  });

  it("can add record to customer bag", function() {
    customer1.addRecordToBag(record1);
    customer1.removeRecordFromBag(record1);
    assert.deepStrictEqual(customer1.bag, []);
  });

  it("can buy from store", function() {
    customer1.buyRecord(record1)
    assert.deepStrictEqual(customer1.bag, [record1])
    assert.strictEqual(customer1.money, 190)
  });



});
