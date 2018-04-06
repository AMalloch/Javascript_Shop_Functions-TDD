var _ = require('lodash')

var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.getArtist = function () {
  this.artist
};

Record.prototype.getTitle = function () {
  this.title
};

Record.prototype.getGenre = function () {
  this.genre
};

Record.prototype.getPrice = function () {
  this.price
};

Record.prototype.allProperties = function () {
  return `Artist: ${this.artist} Title: ${this.title} Genre: ${this.genre} Price: ${this.price}`
};

module.exports = Record;
