const module1 = require("./getCoronaData.js"),
      module2 = require("./unzip.js"),
      module3 = require("./readingCSV.js");


const { promises } = require("fs");

module1();
setTimeout(module2, 4000);
setTimeout(module3, 8000);