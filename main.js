const module1 = require("./getCoronaData.js"),
      module2 = require("./unzip.js");


const { promises } = require("fs");

module1();
setTimeout(module2, 4000);