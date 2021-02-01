let express = require('express')
let app = express();
const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;

// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

readFile('./test-data.json', 'utf-8', (err, fileContent) => {
    if (err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
txs = JSON.parse(JSON.stringify(fileContent));
finalTxs = []
    for(let i=0; i<=1; i++) {
      finalTxs.push(fileContent[i]);
    }
const csvData = csvjson.toCSV(finalTxs, {
        headers: 'key'
    });
    writeFile('./test-data.csv', csvData, (err) => {
        if(err) {
            console.log(err); // Do something to handle the error or just throw it
        }
        console.log('Success!');
    });
});




