const csv = require('csv-parser');
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
const GeoJSON = require('geojson');

function module3(){
var covidData = []
var todayCovidData =[]
var dataa 
var today = new Date();
var dd = today.getDate()-1;
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
todayDate = mm+'/'+dd+'/'+yyyy; 


var p = 0;
fs.createReadStream('./County.csv')
  .pipe(csv())
  .on('data', (row) => {
      covidData[p] = row
      p++
  })
  .on('end', () => {
    var j = 0;
    for (i=0; i < covidData.length; i++){
        if (covidData[i].Date == todayDate){
            todayCovidData[j] = covidData[i];
          j++
      }
    }
    todayCovidData[0].Latitude = '41.7003', todayCovidData[0].Longitude = '-70.3002';
    todayCovidData[1].Latitude = '42.3118', todayCovidData[1].Longitude = '-73.1822';
    todayCovidData[2].Latitude = '41.7938', todayCovidData[2].Longitude = '-71.1449';
    todayCovidData[3].Latitude = '41.4040', todayCovidData[3].Longitude = '-70.6693';
    todayCovidData[4].Latitude = '42.6320', todayCovidData[4].Longitude = '-70.7829';
    todayCovidData[5].Latitude = '42.0834', todayCovidData[5].Longitude = '-71.3967';
    todayCovidData[6].Latitude = '42.0640', todayCovidData[6].Longitude = '-72.4134';
    todayCovidData[7].Latitude = '42.3471', todayCovidData[7].Longitude = '-72.6624';
    todayCovidData[8].Latitude = '42.4672', todayCovidData[8].Longitude = '-71.2874';
    todayCovidData[9].Latitude = '41.2835', todayCovidData[9].Longitude = '-70.0995';
    todayCovidData[10].Latitude = '42.1195', todayCovidData[10].Longitude = '-71.3251';
    todayCovidData[11].Latitude = '41.9584', todayCovidData[11].Longitude = '-70.6673';
    todayCovidData[12].Latitude = '42.3523', todayCovidData[12].Longitude = '-71.0504';
    todayCovidData[13].Latitude = '42.2626', todayCovidData[13].Longitude = '-71.8023';
    todayCovidData[14].Latitude = '', todayCovidData[14].Longitude = '';
    todayCovidData[15].Latitude = '', todayCovidData[15].Longitude = '';

    const csvv = new ObjectsToCsv(todayCovidData)
    csvv.toDisk('./todayData.csv')


    dataa = GeoJSON.parse(todayCovidData, {Point: ['Latitude', 'Longitude']});
    var final = JSON.stringify(dataa);
    fs.writeFile("output.json", final, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }});
  });
}
module.exports = module3;