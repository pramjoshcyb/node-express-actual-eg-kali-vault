const express = require('express');
const bodyParser = require('body-parser');
// simplifies file paths
    // core module, so doesn't need to be npm installed
const path = require('path');

const app = express();

const Queue = require('./queue'); // reading from file need to add from data structures folder

 // process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

/* BODY PARSER MIDDLEWARE */
// handle parsing json content
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/csp-report'}));
// handle parsing urlencoded content [extended explained here: https://www.npmjs.com/package/body-parser#extended]
app.use(bodyParser.urlencoded({extended: false}));

/* STATIC FOLDER MIDDLEWARE */
// set static path
    // `__dirname` is the directory in which the currently executing script resides
        // using this with path.join is safer than the option that doesn't
app.use(express.static(path.join(__dirname, 'public')));

let people = [
    {
        name: "Bob",
        age: 50,
    },
    {
        name: "Jane",
        age: 45,
    },
    {
        name: "T",
        age: 30,
    },
]

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/goodbye', (req, res) => {
    res.send('goodbye world');
});

app.get('/people', (req, res) => {
    res.header('Content-Security-Policy', "img-src \'self\'; report-uri /report")
    res.send("Some sample text!! <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flowchart_showing_Simple_and_Preflight_XHR.svg/768px-Flowchart_showing_Simple_and_Preflight_XHR.svg.png' alt='mixed'>" +


    "<img src='http://telstra.com.au/myimg.png'>");
});

let unique = 1;

function createLog(report) {
    let id = unique;
    unique++; // creates report and returns a log object

    const violatedDirective = report["violated-directive"];

    //id, date, severity

    let severity = 'unknown';
    if (violatedDirective == 'style-src') {
        severity = "moderate";
    } else if (violatedDirective == 'script-src') {
        severity = "high";
    }

    const newLog = {
        id:         id,
        severity:   severity,
        reportType: violatedDirective,
        timestamp:  Math.floor(new Date().getTime() / 1000)
    };


    return newLog;

}

const logCache = new Queue(); // creating a queue

// adds a log object to the queue, the oldest logs are deleted and saved to a file 
// after queue size goes above 1000
function queueLog(log) {
    
    logCache.add(log); // adds a log to queue
    while (logCache.length() > 1000) { // sends upto 1000 logs since browser knows
        const oldestLog = logCache.remove(); // takes the step at front of queue 
        console.error('Saving old logs to a file not implemented yet'); //reminds us when we hit queue to fix
        
    }


}
// route
// handles post requests to any url
app.post('/*', (req, res) => {
    console.log(req.body);

    // handle the report in some way
    const report = req.body["csp-report"];

    const log = createLog(report); // adding the report here and now we need to store it

    queueLog(log); // new function to write

    res.end();
    //res.send('hello world');
});

