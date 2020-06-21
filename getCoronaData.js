const rp = require("request-promise");
const $ = require("cheerio");
const https = require('https');
const fs = require('fs');

function module1(){
const url =
  "https://www.mass.gov/info-details/covid-19-response-reporting";

rp(url)
  .then(function (html) {
    const data = $("p > a", html).first().attr("href")
    const web = "https://www.mass.gov/";
    const src = web.concat("", data);
    var file = fs.createWriteStream("massData.zip");
      var request = https.get(src, function(response) {
        response.pipe(file);
      });
    })
    
  .catch(function (err) {
    console.log("There was an error");
  });

}
module.exports = module1;