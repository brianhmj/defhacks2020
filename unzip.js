const AdmZip = require('adm-zip');
 
function module2(){

var zip = new AdmZip("./massData.zip");
zip.extractEntryTo("County.csv", "./", false,true);
//zip.extractAllTo("./", true);
}
module.exports = module2;