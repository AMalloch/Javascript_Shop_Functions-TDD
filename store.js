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

Store.prototype.removeRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.recordList = function () {
  return _.forEach(this.inventory, function(element) {
  });
};

Store.prototype.sellRecord = function (record) {
  _.forEach(this.inventory, function(element){
    if(record === element){
      this.balance += element.price
      const index = this.inventory.indexOf(element);
      this.inventory.splice(index, 1);
    };
  }.bind(this));
};

module.exports = Store;
