var _ = require('lodash')

var Customer = function (name, money){
  this.name = name;
  this.money = money;
  this.bag = [];
}

Customer.prototype.addRecordToBag = function (record) {
  this.bag.push(record);
};

module.exports = Customer;
