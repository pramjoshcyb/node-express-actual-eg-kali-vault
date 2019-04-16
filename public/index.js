// this is our setup
const source =   document.getElementById("entry-template").innerHTML; //gets the script element with ref id and innerhtml is the html element existing inside
const template = Handlebars.compile(source); // let handlebars compile what it needs to 

// this is our data in structured format of key and value pairs, key are what we pass through in index.html
//var context = {title: "My New Post", body: "This is my first post!"}; //passed in keys will get us the values

// put the context (data) inside the template
//var html    = template(context); //copied out of handlebars js documentation
// template below is what is inside the script in index.html 

//document.getElementById("display").innerHTML = template(context); //tell element that has id of display to change its inner html to template(context)
// web page itself is a document and we do a . to access by looking for element having id entry-template and then we get its inner html, meaning html inside the entry template

for (let i = 0; i < logList.length; i++) {
    const datetime = new Date(logList[i].timestamp * 1000).toLocaleString();
    logList[i].datetime = datetime;
}

const bTree = new BST();

function addArrayToBtree(firstIndex, lastIndex) {
    
    if (lastIndex < firstIndex) {
        return;
    }

    const medianIndex = Math.floor((firstIndex + lastIndex) / 2);

    bTree.insert(logList[medianIndex].timestamp, logList[medianIndex]);

    // add left sub-array to btree
    addArrayToBtree(firstIndex, medianIndex - 1);

    // now add the right sub-array to the tree
    addArrayToBtree(medianIndex + 1, lastIndex);

}

addArrayToBtree(0, logList.length - 1);

function refilter() {
    const fromDate = new Date();
    const fromTimeField = document.getElementById('fromtime').value;
    const toTimeField = document.getElementById('totime').value;
    console.log (fromTimeField.split(':').length,
        toTimeField.split(':').length);

    let toDisplay = logList;
    // do this only if we have correct times
    if (fromTimeField.split(':').length == 3 &&
          toTimeField.split(':').length == 3) {

        let [hours, minutes, seconds] = document.getElementById('fromtime').value.split(':');

        fromDate.setHours(hours, minutes, seconds, 0);
        const fromTimestamp = fromDate.getTime() / 1000;


        const toDate = new Date();
        [hours, minutes, seconds] = document.getElementById('totime').value.split(':');
        toDate.setHours(hours, minutes, seconds, 999);

        const toTimestamp = toDate.getTime() / 1000;

        toDisplay = bTree.range(fromTimestamp, toTimestamp);
    }

    // get contents of search input 
    const searchString = document.getElementById('search-string').value;

    toDisplay = toDisplay.filter(function(item) {

        // locate for string
        if (item.reportType.indexOf(searchString) != -1) {
            return true;
        } else {
            return false;
        }

        // return item.reportType.indexOf(searchString) != -1;
    });

    toDisplay = toDisplay.slice();
    toDisplay.sort(function(itemA, itemB) { // comparator function
        // return a number < 0 if itemA < itemB (comes prior)
        // return a number > 0 if itemA > itemB (comes after)
        // return 0 if don't care

        const severityA = ['UNKNOWN', 'MEDIUM', 'HIGH'].indexOf(itemA.severity);
        const severityB = ['UNKNOWN', 'MEDIUM', 'HIGH'].indexOf(itemB.severity);

        if (severityA > severityB) {
            return -1;
        } else if (severityA < severityB) {
            return 1;
        } else {
            if (itemA.timestamp < itemB.timestamp) {
                return -1;
            } else if (itemA.timestamp > itemB.timestamp) {
                return 1;
            } else {
                return 0;
            }
        }

    });


    const context = {
        logs: toDisplay,
    };

    document.getElementById("display").innerHTML = template(context);
}

refilter();
