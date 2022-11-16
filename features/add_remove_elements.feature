Feature: Adding elements

	Scenario Outline: As a user, i can add and delete elements

	Given I am on the add_remove_elements page
	When I click on add button <amount> times
	Then I can click on delete button for <amount> times

	Examples:
	  | amount  |
      | 1		|  
      | 3		|
      | 4		|
      | 11		|