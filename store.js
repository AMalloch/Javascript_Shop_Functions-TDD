var _ = require('lodash')

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

Store.prototype.getName = function () {
  this.name
};

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};


module.exports = Store;
