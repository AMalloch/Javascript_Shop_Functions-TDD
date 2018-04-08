var _ = require('lodash')

var Customer = function (name, money){
  this.name = name;
  this.money = money;
  this.bag = [];
}

Customer.prototype.addRecordToBag = function (record) {
  this.bag.push(record);
};

Customer.prototype.removeRecordFromBag = function (record) {
  _.forEach(this.bag, function(element){
    if(record === element){
      const index = this.bag.indexOf(element);
      this.bag.splice(index, 1);
    };
  }.bind(this));
};

module.exports = Customer;
