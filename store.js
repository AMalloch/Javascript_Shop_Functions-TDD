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

Store.prototype.getCity = function () {
  this.city
};

Store.prototype.getCity = function () {
  this.balance
};

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.recordList = function () {
  return _.forEach(this.inventory, function(element) {
  });
};


module.exports = Store;
