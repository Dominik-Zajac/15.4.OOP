function Phone(brand, price, color, screen) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.screen = screen;
};

Phone.prototype.printInfo = function() {
  console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', the price is ' + this.price + ' and size screen is ' + this.screen + '.');
};

var GalaxyS6 = new Phone('Samsung', 1850, 'black', '4.90"');
var iPhone6S = new Phone('Apple', 2250, 'silver', '4.70"');
var One = new Phone('OnePlus', 1400, 'white', '5.00"');

GalaxyS6.printInfo();
iPhone6S.printInfo();
One.printInfo();
