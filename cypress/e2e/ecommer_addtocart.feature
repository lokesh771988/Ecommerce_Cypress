Feature: register testing

Scenario: verifying register page
Given opening ecommer url
When register user in ecommer
Then verify login page

Scenario: verifying register page1
Given opening ecommer url
When register user in ecommers
 | firstName | lastName | Password   | configPassword| Message                      |
 | lokesh    | gorantla | Gtesting@2 | Gtesting@2    | Your registration completed  |
Then verify login page