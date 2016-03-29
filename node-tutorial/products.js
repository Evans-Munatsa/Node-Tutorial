var fs = require('fs');

module.exports = function(path) {

  this.productNames = function(callback){
    var list = fs.readFileSync(path, 'utf-8');
    var items = list.split('\n');
    var productList = [];
    // var productSold = [];

    items.forEach(function(items){
      var productName = items.split(',')[1];
      if (productList.indexOf(productName) === -1) {
        productList.push(productName);
      };
    });

    callback(null, productList);
  };

  this.productsSold = function(callback) {
    var list = fs.readFileSync(path, 'utf-8')
    console.log('this is the products', list)

     //var items = list.split('\n');
  };

};

// this.productsSold = function(callback) {
//   var list = fs.readFile('./files/products.csv', 'utf-8')
//   var items = list.split('\n');
// };
