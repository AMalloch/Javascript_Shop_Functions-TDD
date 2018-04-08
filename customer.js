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

Customer.prototype.buyRecord = function (record) {
    this.money -= record.price;
    this.addRecordToBag(record);
};

Customer.prototype.sellRecord = function (record) {
  _.forEach(this.bag, function(element){
    if(record === element){
      this.money += record.price
      this.removeRecordFromBag(record);
    };
  }.bind(this));
};

Customer.prototype.bagItemsTotalValue = function () {
    return _.sumBy(this.bag, 'price');
};

Customer.prototype.filterBagItems = function (genre) {
  const result = this.bag.filter(record => record.genre === genre);
  return _.sumBy(result, 'price');
};

Customer.prototype.mostValuableRecord = function () {
  return _.maxBy(this.bag, 'price');
};

Customer.prototype.sortBagByPrice = function (desired_order) {
  if(desired_order === "decending"){
   bagByPrice = _.sortBy(this.bag, ['price']);
    return _.reverse(bagByPrice);
  }else if(desired_order === "ascending"){
    return _.sortBy(this.bag, ['price']);
  };
};

Customer.prototype.compareBagValues = function (customer1, customer2) {
  const customerOneBagValue = customer1.bagItemsTotalValue();
  const customerTwoBagValue = customer2.bagItemsTotalValue();
  return `First Customer Bag Value: ${customerOneBagValue} Second Customer Bag Value: ${customerTwoBagValue}`
};



module.exports = Customer;
