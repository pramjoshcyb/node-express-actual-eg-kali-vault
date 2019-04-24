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

What I have identified to test in the whole application is to use a file called queue.test.js which tests the application based on queues. The length of the first queue should be empty to check if the logs are entering into the application with a value associated with them. The next test will be increase the length of the queue to check if they are coming in order. I will also be testing the queues when the max length of an item is 1. 

I will be testing only the edge cases of the application and to check if the logs are being entered into the table according to the timestamp.
COME BACK TO THIS QUESTION - WATCH VIDEO


## T1.3
**Outline** the standards and methodology you are using:
**Standards**: What is the benchmark for the suite of tests passing? What will occur if the tests fail?

The benchmark I have set for the suite of tests to pass is to compare the results to a 95% mark. If the 95% of the tests pass then it is a clear indication that the application will not be having any bugs or issues with the front end and the back end of the app. 95% to me is a satisfactory bench mark to set 

**Methodology**: What is your method and objective in conducting tests - unit testing, integration testing, performance testing or end to end testing.

