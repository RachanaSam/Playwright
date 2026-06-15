Feature: LoginFunction
Scenario: Valid LoginFunction
Given User is on login page
When User enters valid username "standard_user" and password "secret_sauce"
Then user should see invendory page

@validation
Scenario: Invalid LoginFunction
Given User is on login page
When User enter invalid username and password
Then User should see error message