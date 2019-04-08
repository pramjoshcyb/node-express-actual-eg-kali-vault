// this is our setup
var source = document.getElementById("entry-template").innerHTML; //gets the script element with ref id and innerhtml is the html element existing inside
var template = Handlebars.compile(source); // let handlebars compile what it needs to 

// this is our data in structured format of key and value pairs, key are what we pass through in index.html
//var context = {title: "My New Post", body: "This is my first post!"}; //passed in keys will get us the values

// put the context (data) inside the template
//var html    = template(context); //copied out of handlebars js documentation
// template below is what is inside the script in index.html 

//document.getElementById("display").innerHTML = template(context); //tell element that has id of display to change its inner html to template(context)
// web page itself is a document and we do a . to access by looking for element having id entry-template and then we get its inner html, meaning html inside the entry template
const context = { // data type is object of type key value pairs
    //title: "My New Post", 
    //body: "This is my first post!",
    logs: [ // log is one key and the value is all these arrays and within the array we have 10 objects which have four key value pairs
        {
            id: 1, //id, severity, reporttype and timestamp go in a table
            severity: "low", // now we want to access items in array 
            reportType: "script",
            timestamp: 15243627// we want to loop through and get the data out of each log and represent in table
        },
        {
            id: 2,
            severity: "critical",
            reportType: "mixed content",
            timestamp: 8282782881
        },
        {
            id: 3,
            severity: "moderate",
            reportType: "style-src",
            timestamp: 1554431444,
        },
        {
            id: 4,
            severity: "severe",
            reportType: "script-src",
            timestamp: 1554431448,
        },
        {
            id: 5,
            severity: "High",
            reportType: "Violated Directive",
            timestamp: 1554431256
        },
        {
            id: 6,
            severity: "Medium",
            reportType: "Mixed Content",
            timestamp: 1554431278
        },
        {
            id: 7,
            severity: "high",
            reportType: "script",
            timestamp: 15649483904
        },
        {
            id: 8,
            severity: "low",
            reportType: "mixed content",
            timestamp: 15649483905
        },
        {
            id: 9,
            severity: "medium",
            reportType: "script",
            timestamp: 1554431249
        },
        {
            id: 10,
            severity: "high",
            reportType: "style",
            timestamp: 1554431375
        }
    ]
    // this is they key for all of the logs below, key is logs and value is arrays
};

document.getElementById("display").innerHTML += template(context); // looking at doc and get element id which has display and look at its innerhtml and override and stick our template and pass in our data in template