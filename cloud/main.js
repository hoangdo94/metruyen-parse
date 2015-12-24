var cheerio = require('cloud/modules/cheerio.js');

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
