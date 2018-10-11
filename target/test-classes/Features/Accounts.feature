@FunctionalTest
Feature: Create Acounts

Scenario Outline:  Create a new contact scenario

 	Given user is on Homepage
    When title of the page is Zoho
    When user navigates to Login page
    Then User enters username and password
	| olcayyf@hotmail.com | YourPass |	
   
    Then user click to Login button
    Then user at Dasborad
    
	Then user go to new Account page
	Then user click to New button
	Then user enters page details  "<accountname>" and "<ratinge>" and "<phone>"
	Then user click to Save button

Examples:
	| accountname | rating | phone |
	| Account1 | 1 | 0745125896 |
	| Account2 | 2 | 0745125123 |

	#The account page has only a mandatory field AccountName
	# rating is a dropdownlist
	# prone is standart numbers
	