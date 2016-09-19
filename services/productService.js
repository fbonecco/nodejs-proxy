var request = require('request');

module.exports = {
  getProducts: function (done) {
    request.get({
      url: 'http://magento.com/api/products',
      method: 'get'
    }, function (error, response, body) {
      done(body);
    });
  }
};
