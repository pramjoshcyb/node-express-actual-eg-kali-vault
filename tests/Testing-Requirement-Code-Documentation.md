# Testing Requirement Code

# T1 

Produce a written report which outlines the plan and designs for tests of your application. The report must be based on an **analysis** and **review** of the code requirements, features and requirements in the design specification, and your own code. 

## T1.1
**Outline** the **context** of testing: why are you testing the application?

Since the application consists of ingesting logs which is crucial to security, developer operations and the system administration it is important to test the application because to meet the requirements of the client there should not be any fault in the final output. 

Testing the application ensures that the final application is reliable and the application has been met to a satisfactory standard. Testing the application also ensures that the right facilities are provided to the client, in terms of the delivery of the application which may need lower maintenance costs which will result in accurate, consistent and reliable outcomes. 

It is also important to test the application because in terms of the severity levels,there should not be any issues as to how the logs are being labelled. If a report is labelled as severe but in reality it is actually a low finding then it can create confusion for the client because it will consume their time to invest in the problem that is actually misleading and it will cost them money. 

The application should also be tested to prove that it performs effectively and to ensure that it does not result in failures as it can be costly in the future stages of the development. 

## T1.2
**Outline** the scope of testing:
- **what** have you identified to test?
- **how** much of the application are you testing?

What I have identified to test in the whole application is to use a script file called queue.test.js which tests the application based on queues. The length of the first queue should be empty to check if the queues are entering the application with a value associated with them. The next test will be increasing the length of the queue to check if they are coming in order. I will also be testing the queues when the maximum length of an item is 1. 

I will only be testing the cases in the script file which has been prepared and is sufficient to provide evidence that the application functions properly using the Jest framework



## T1.3
**Outline** the standards and methodology you are using:
**Standards**: What is the benchmark for the suite of tests passing? What will occur if the tests fail?

The benchmark I have set for the suite of tests to pass is to compare the results to a 95% mark. If the 95% of the tests pass then it is a clear indication that the application will not be having any bugs or issues with the front end and the back end of the app. 95% to me is a satisfactory bench mark to set because I am leaving only a 5% chance to detect errors in the application. I can be confident that 95% of the time the application will run perfectly. 

If the tests fail then, as developers, we will have to re check the code and ensure that certain measures are taken to prevent future failures from occurring. We will also have to set a new benchmark to ensure that the minimum criteria have been met.

**Methodology:**

Our main method and objective in conducting tests is to perform unit testing. Unit testing consists of individual components of the application to be tested. The purpose of these unit tests in this application is to validate that each unit of the software as mentioned by the criteria. We must test if the test cases fail, what is the output of each test case and if they are in relation to the set benchmark. 

Unit testing also involves observing any defects introduced due to the change when the unit tests are written. 



## T1.4
**Outline** tests you will run and the tools you will use to conduct the tests, you must:
- **plan** at least three tests of code
- **identify** the Javascript testing framework that you will use

The three tests of code that I will be using to test the application will be 

1 - to test if the list will be empty initially and then increasing the length 
2 - the second test will be to test the maximum length of 1 item in the queue 
3 - the third test will be to remove the items in the First in First Out order



The JavaScript testing framework that I will be using is Jest. It is designed to ensure correctness of any JavaScript codebase. It lets us write a test with an API that will output the results immediately.




## T1.5
**Outline** the types and structure of the input data needed to conduct the tests

The types and structure of the input data needed to conduct the tests will be empty tests to check the length of the queue when the list is initially empty, the second test will be to check the sequence when the queue is of maximum length 1 and the third test will be to check the length of the queue when it has items upto 2 and removes the items in FIFO order. 


## T1.6
**Outline** the steps you will take to conduct each test in terms of:
- **what** the test cases will you use for each test
- **How** you will document the results
- **What** you expect the results to be for given test cases
- **benchmarks** for the test passing 

The test cases I will be using for each test will be the testing the length of the queue when the list is empty, the other test cases are to check the sequence of the queue when the list has a length of 1 and finally the last test case is to check the length of the queue when the list has 2 items. 

I will be documenting the results of these tests via screenshots of the output of each test case when the command npm run test is issued.

The expected result will be a pass for each given test

Benchmarks for the test passing will be set to a 95% accuracy standard, leaving only a 5% chance of errors arising. 




# T2
**Implement and Execute Your Testing Plan** - you must **review** your testing plan and **ensure** you follow it, you must also **review** the design specification to ensure you are testing features or componenents that are part of the design specification. 

## T2.1
**Determine** the test environment requirements and create scripts to configure the testing environment and run tests, you must have script(s) which:
- set test data
- paths for output of test results
- run the tests
- store test results in a file

The test environment that will be used is the Jest framework and the test data is set in the queue.test.js file which acts like a script for each individual test case. The paths for the output of test results will be piped into a file in the test folder. 

Command that will be used to store the test results in a file will be 
npm run test &> filename.txt

output will be stored in the test folder with the names of the files called:

25042019testcase1.txt
25042019testcase2.txt
25042019testcase3.txt
The &> command makes the output visible in the text files and highlights any errors that have occurred. 



## T2.2 
**Create** test data and a test suite based on your plan and test cases using a Javascript testing framework. The test suite must:
- include at least three tests
- include test data for the tests
- utilise a JavaScript testing framework
- be based on your testing plan

You must run the tests twice - after the first test run, review the tests and check for any defects in the test run. 


**SCREENSHOTS ARE IN THE PDF FILE OF THE ASSIGNMENT FOLDER**

**T2.3**

**Based on the results of your tests, produce a test results report which outlines the following and includes:**
-	The results of the tests

-	Your evaluation of whether the tests were effective in          identifying defects in the application

-	How you would fix a defect in the application as a result of testing and debugging

**Results:**
The results of each test turned out to be successful as per the screenshots above and as expected all the individual test cases passed, initially due to an error in the syntax of the test cases the results turned out to be a failure.

**Evaluation:**
The tests were effective in identifying defects in the application because the output of the npm run tests command displayed a few logic and syntax errors in my test cases, I had to re check my tests and plan them accordingly to cater for a successful pass rate. 

**Fix:**
If a defect was found in the application as a result of testing and debugging, I would go through the entire application through a validator like JSLint for the JavaScript part of the application and a HTML5 validator for the actual table of logs to be shown appropriately. 










