# README

## How to RUN tests on the application
To run tests on the application please open the folder and change directory into
Node-Assignment-Term3/node-exp-eg when the application has been cloned to your local machine. 

Clients should be able to see the two test files called bst.test.js and queue.test.js
if this is viewed then please issue **npm run test** on the command line to run the tests on this application.

## How to run the application in a development environment
To run this application in the development environment, please open a terminal and change directory into the /Node-Assignment-Term3/node-exp-eg directory. 

On this directory please issue the command **node app.js** to run the main application as a server on host 3000.

Please open another terminal window and change directory into /dsd-sec-reporter-assignment directory (available for cloning) and issue the command
**npm run start** which starts a server on host 3200.

Please open Mozilla firefox and in the browser from two tabs please type:
localhost:3000
localhost:3200

Refresh the server running on port 3200 and refresh the server on 3000 to be able to view the logs. 

## How to run the application in a production environment 
Install the node.js framework

You can use Amazon Web Services to spin up your own server
Create a key pair - complex pwd that is saved in your PC that you put into server to launch and the server decrypts it, it gives more security for the server.

Select location of the target host (example Melbourne, AUS)

Go to instances and launch and pick the base system (Windows 2016 Base - 32/64 bit)

configure instance and choose tenancy - change to dedicated for faster speed on server 

launch and select key pair. 

Check via clicking on running instance

Click connect to download remote desktop file.

Server will load up.

## A list of the requirements, constraints or limitations of the application as a logging solution

## Requirements:
- Node.js JavaScript run time environment
- Express framework for JavaScript for building web applications and API's.
- Handlebars 
- JEST framework for testing

## Constraints:
- Slow internet speed
- not testing as you go "test often test early" if not done properly it can cause errors that will take hours to solve

## List the third-party dependencies for the project and provide references to relevant parts of third party documentation
- Express https://expressjs.com/ 
- Content Security Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP 
- Jest https://jestjs.io/docs/en/getting-started 



