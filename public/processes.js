const child_process = require('child process')

child_process.fork('./forkee'); //fork bomb, takes up resources until the system is killed, infinite loop

// can check number of processes in system by issuing ps command

