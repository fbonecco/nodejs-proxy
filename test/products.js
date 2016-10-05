var supertest = require('supertest');
var app = require('../app.js');
var productService = require('../services/productService.js');

describe('GET /products', function () {
  it('respond with json', function (done) {
    var products = [];
    var product = {
      "id": 1,
      "sku": "CDP1-003",
      "name": "Los Glaciares",
      "attribute_set_id": 4,
      "price": 90,
      "status": 1,
      "visibility": 4,
      "type_id": "simple",
      "extension_attributes": [],
      "product_links": [],
      "tier_prices": [],
      /*      "custom_attributes": [{
              "attribute_code": "description",
              "value": "<p>Calcet&iacute;n largo, de base negro, con lunares peque&ntilde;os de colores azul, violeta y blanco, con puntera y tal&oacute;n az&uacute;l. Talle: 37 al 44, unisex. Materiales: 80% algod&oacute;n, 15% poli&eacute;ster y 5% elastano. Cuidados: Lavar a m&aacute;quina a temperatura no superior a 40&ordm; C, no blanquear y no planchar.</p>"
            }, {
              "attribute_code": "meta_title",
              "value": "Los Glaciares"
            }, {
              "attribute_code": "meta_keyword",
              "value": "Los Glaciares"
            }, {
              "attribute_code": "meta_description",
              "value": "Los Glaciares Calcetín largo, de base negro, con lunares pequeños de colores azul, violeta y blanco, con puntera y talón azúl. Talle: 37 al 44, unisex. Materiales: 80% algodón, 15% poliéster y 5% elastano. Cuidados: Lavar a máquina a temperatura no superi"
            }, {
              "attribute_code": "image",
              "value": "/l/o/los-glaciares.png"
            }, {
              "attribute_code": "small_image",
              "value": "/l/o/los-glaciares.png"
            }, {
              "attribute_code": "thumbnail",
              "value": "/l/o/los-glaciares.png"
            }, {
              "attribute_code": "url_key",
              "value": "los-glaciares"
            }]
            */
    };
    products.push(product);



    supertest(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect(products);

  });
});
