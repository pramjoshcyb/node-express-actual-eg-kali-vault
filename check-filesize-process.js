const child_process = require('child_process')

//  the list below are the reports that are sorted by time
//  replaces the double spaces with single space
//  takes the field 5 


const firstcmd = "ls -lt reports*.log | sed 's/ */ /g' | cut -d ' ' -f 5 | head -n 1";
// finds the four groups of characters which are lead by spaces (using {4}), and change line with the next group

const secondcmd = "ls -lt reports*.log | sed 's/\\([^ ]* *\\)\\{4\\}\\[^ ]*\\).*/\\2' | cut -d ' ' -f 5 | head -n 1";
// finds the four groups of characters which are lead by spaces (manually), and replaces line with the next group

const thirdcmd = "ls -lt reports*.log | sed 's/[^ ]* *[^ ]* *[^ ]* *[^ ]* *[^ ]* *\\([^ ]*\\).*/\\1/' | cut -d ' ' -f 5 | head -n 1";



module.exports = function () { // JavaScript module.exports which is a unique object included in all the JavaScript files in Node.js framework by default. 
// module is a variable representing the existing module
// exports is an object exposed to the module 

// child_process.exec spawns a child process from the child_process file
    const child = child_process.exec(cmd1, 
        (error, stdout, stderr) => { // parameters passed in containing error, standard out and standard error file descriptor
            /* if (error) { // can something go wrong?
                console.error(`exec error: ${error}`);
                return;
            }*/
            console.log(`File size: ${stdout}`);
            //console.log(`stderr: ${stderr}`);
        }); 
}