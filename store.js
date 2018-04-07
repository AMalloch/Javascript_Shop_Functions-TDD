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

Store.prototype.stockValue = function () {
  let stockValue = 0
  this.inventory.forEach(record => stockValue += record.price);
  return stockValue;
};

Store.prototype.financialInfo = function () {
  let totalStockValue = this.stockValue();
  return `Balance: ${this.balance} Stock Value: ${totalStockValue}`
};

Store.prototype.findRecordByGenre = function (genre) {
  const recordsByGenre = this.inventory.filter(record => record.genre === genre);
  return recordsByGenre;
};

module.exports = Store;
