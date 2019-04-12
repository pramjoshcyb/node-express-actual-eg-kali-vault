const child_process = require('child_process')

//  the list below are the reports that are sorted by time
//  replaces the double spaces with single space
//  takes the field 5 


const firstcmd = "ls -lt reports*.log | sed 's/ */ /g' | cut -d ' ' -f 5 | head -n 1";
// finds the four groups of characters which are lead by spaces (using {4}), and change line with the next group

const secondcmd = "ls -lt reports*.log | sed 's/\\([^ ]* *\\)\\{4\\}\\[^ ]*\\).*/\\2' | cut -d ' ' -f 5 | head -n 1";
// finds the four groups of characters which are lead by spaces (manually), and replaces line with the next group

const thirdcmd = "ls -lt reports*.log | sed 's/[^ ]* *[^ ]* *[^ ]* *[^ ]* *[^ ]* *\\([^ ]*\\).*/\\1/' | cut -d ' ' -f 5 | head -n 1";
