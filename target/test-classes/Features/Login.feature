@SmokeTest
Feature: Login Feature
  Verify if user is able to Login in to the site
  
Scenario Outline: Login Test Scenario
    Given user is on homepage
   	When title of the page is zoho
    When user navigates to login page
    Then user enters "<username>" and "<password>"
    Then user click to login button
    Then user at dasborad
#After the username and password value with your account.
Examples:
	| username | password |
	| olcayyf@hotmail.com  | YourPass | 
