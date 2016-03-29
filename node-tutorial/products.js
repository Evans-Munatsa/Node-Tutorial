var fs = require('fs');

module.exports = function(path) {

    this.productNames = function(callback) {
        var list = fs.readFileSync(path, 'utf-8');
        var items = list.split('\n');
        var productList = [];
        // var productSold = [];

        items.forEach(function(items) {
            var productName = items.split(',')[1];
            if (productList.indexOf(productName) === -1) {
                productList.push(productName);
            };
        });

        callback(null, productList);
    };

    this.productsSold = function(callback) {
        var list = fs.readFileSync(path, 'utf-8');
        //array
        var items = list.split('\n');
        var quantityMap = {};

        items.forEach(function(item) {
            var columns = item.split(','); //want to get strings in array
            //define your products 1 index
            var products = columns[1];
            var quantity = columns[2];

            if (quantityMap[products] === undefined) {
                quantityMap[products] = 0; //initializing to 0
                // productSold.push(productName);
            }
            quantityMap[products] = quantityMap[products] + Number(quantity);
            // console.log('this is the products', list);
        });
        //var items = list.split('\n');
        console.log(quantityMap);
        callback(null, quantityMap);
    };
};