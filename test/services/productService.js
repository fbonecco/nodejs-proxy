const sinon = require('sinon');
const assert = require('chai').assert;
const request = require('request');
const target = require('../../services/productService.js');

describe('hooks', function() {

  before(function() {
    sinon
      .stub(request, 'get')
      .yields(null, null, JSON.stringify({login: "bulkan"}));
  });

  describe('test productService\'s getProducts function', function() {
      it('respond with a json object of products', function(done) {
        target.getProducts(function(err, result){
          if (err) return done(err);
          console.log("aaa " + result);
          done();
        });

        // let callback = sinon.stub().returns(100);
        // var proxy = function (callback) {
        //   return callback();
        // }(callback);
        //
        // assert.equal(proxy, 100);
      });
  });

});
