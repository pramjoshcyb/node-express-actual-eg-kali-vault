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

