var _ = require('lodash')

var Customer = function (name, money){
  this.name = name;
  this.money = money;
  this.bag = [];
}

module.exports = Customer;
