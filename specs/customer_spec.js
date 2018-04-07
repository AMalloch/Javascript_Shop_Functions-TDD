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

});
