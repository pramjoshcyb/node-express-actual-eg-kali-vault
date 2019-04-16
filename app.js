const express = require('express');
const bodyParser = require('body-parser');
// simplifies file paths
    // core module, so doesn't need to be npm installed
const path = require('path');

const winston = require('winston'); //updated on 11/4/19 from 10/4/19 coding session
const app = express();

const fs = require('fs');
const checkFilesize = require('./check-filesize-process'); 

const Queue = require('./queue'); // reading from file need to add from data structures folder

//const LOG_FILE_NAME = "log1.txt";

const levels = { //updated on 11/4/19 from 10/4/19 coding session
    HIGH: 0,
    MODERATE: 1,
    UNKNOWN: 2,
};

const myFormat = winston.format.printf((log) => { //updated on 11/4/19 from 10/4/19 coding session
    return `${log.severity}: ${JSON.stringify(log, null, 4)}\n-------------n`
});

const logger = winston.createLogger({ //updated on 11/4/19 from 10/4/19 coding session
    level: 'UNKNOWN', // creation of logs
    levels: levels,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'},
    transports: [
        //
        // - Write to all the logs with the level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({
            filename: 'reports.log',
            maxsize: 10000000,
            format: myFormat,
        }),
        new winston.transports.Console({
            format: myFormat,
        }),
    ]
});



//const logWriteStream = fs.createWriteStream(LOG_FILE_NAME, { flags: 'a', }); //writing to a file, resource: nodejs.org
// FIXABOVE AS it opens before the server finishes starting up
// process.env.PORT lets the port be set by Heroku

//logWriteSTream.on('open', ) //opens after server 

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
app.use(express.static(path.join(__dirname, 'public'))); //code sends the file to the server 

app.get('/data.js', (req, res) => {
    const object = logCache.toArray(); //need to make array from linked list
    
    res.send(`var logList = ${JSON.stringify(object)};`); // FIX THIS
});

let unique = 1;

function createLog(report) {
    let id = unique;
    unique++; // creates report and returns a log object

    const violatedDirective = report["violated-directive"];

    //id, date, severity

    let severity = 'UNKNOWN'; //updated on 11/4/19 from 10/4/19 coding session
    if (violatedDirective == 'style-src') {
        severity = "MODERATE";
    } else if (violatedDirective == 'script-src') {
        severity = "HIGH";
    }

    const newLog = { //updated on 11/4/19 from 10/4/19 coding session
        id:         id,
        severity:   severity,
        reportType: violatedDirective,
        timestamp:  new Date().getTime() / 1000,
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
        logger.log(oldestLog.severity, oldestLog); //takes the oldest log and maps severity level
    }


}
// route
// handles post requests to any url
process.on('SIGINT', () => {
    console.log('Received SIGINT. Flushing logs to log file.');
    while (logCache.length() > 0) {
        const oldestLog = logCache.remove();
        logger.log(oldestLog.severity, oldestLog);
    }
    logger.end();
    logger.on('finish', () => {
        console.log('Exiting');
        process.exit(0);
    });
});

// route 
// handles post requests to a variety of URLs
app.post('/*', (req, res) => {
    //console.log(req.body);

    // this is sent by the browser formatted as a CSP standard report
    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Violation_report_syntax //check if you wrote the link correctly
    // you can violate the CSP in browser and observe the network developer tools
    
    // OR ... console.log(req.body);

    checkFilesize();

    const report = req.body["csp-report"];

    const log = createLog(report); // adding the report here and now we need to store it

    queueLog(log); // new function to write

    res.end();
    //res.send('hello world');
});

