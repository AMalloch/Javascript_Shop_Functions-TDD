var assert = require('assert')
var Store = require('../store.js')
var Record = require('../record.js')
var Customer = require('../customer.js')

describe('Store', function () {


  var store1;
  var record1;
  var record2;
  var customer1;

  beforeEach(function () {
    store1 = new Store("Gussy's Root'n Toot'n Records", "Glasgow", 0);
    record1 = new Record("Alan", "Mind Alan", "Acid Jazz", 10);
    record2 = new Record("Adam", "Who?", "Funk", 9);
    record3 = new Record("Donald O'Daniel", "Chewin the fat", "Funk", 5);
    customer1 = new Customer("Mike", 200);
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

  it("can remove record to the store inventory", function() {
    store1.removeRecord(record2);
    assert.deepStrictEqual(store1.inventory, [record1]);
  });

  it("can display all objects in an array", function(){
    assert.deepStrictEqual(store1.recordList(), [record1, record2]);
  });

  it("can sell a record", function(){
    store1.sellRecord(record1);
    assert.deepStrictEqual(store1.inventory, [record2]);
    assert.strictEqual(store1.balance, 10);
  });

  it("can total inventory value of a store", function(){
    assert.strictEqual(store1.stockValue(), 19)
  })

  it("can return all financial information of a store", function(){
    assert.strictEqual(store1.financialInfo(), "Balance: 0 Stock Value: 19");
  });

  it("can view records of a certain genre", function(){
    store1.addRecord(record3);
    assert.deepStrictEqual(store1.findRecordByGenre("Funk"), [record2, record3])
  });

  it("can sell record to a customer", function(){
    store1.sellRecordToCustomer(customer1, record1)
    assert.deepStrictEqual(store1.inventory, [record2]);
    assert.strictEqual(store1.balance, 10);
    assert.deepStrictEqual(customer1.bag, [record1])
    assert.strictEqual(customer1.money, 190)
  });

});
