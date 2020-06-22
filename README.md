# defhacks2020
Trying stuff out

Author: Brian Jung
Sunday June 21st 2020
******************

Using node.js, JavaScript, and HTML created a code that gets county level data from
the mass.gov site. Using the information, an interactive map is created on HTML that
allows user to load a map on any browser. Hovering over the dot gives the information
on the number of cases.

To run the code you need to have node.js, which can be easily installed.
https://nodejs.org/en/download/

Steps to run the code:
Open terminal and path it using CDPATH to define current directory
For example, if this file is in your desktop you would write


cd /Users/currentUser/Desktop/Resiliency_Challenge 


Once you are in the correct directory, run install for the used modules. I was unable
to upload the modules and libaries so run these code one at time. 

npm install request-promise
npm install cheerio
npm install https
npm install csv-parser
npm install objects-to-csv
npm install geojson
npm install adm-zip
npm install request


Then run the main file,


node main.js


Finally, open up Web.html (in templates file) on a browser.
