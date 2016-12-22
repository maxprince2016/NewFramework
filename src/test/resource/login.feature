Feature: Login User Test

  Background: 
    Given I am on the Homepage
    And I click on My Account Link
    And I see a welcome message

  @Login
  Scenario Outline: As a Registered user I want to Login successfully
    When I enter email "<email>" details
    And I enter password "<passw>" details
    And I click signin button
    Then I verify that I am logged in
    And I log out

    Examples: 
      | email                | passw       |
      | maxwell174@gmail.com | password123 |

  @Login
  Scenario Outline: As a Registered user I want to see an error message when i enter incorrect details
    When I enter email "<email>" details
    And I enter password "<passw>" details
    And I click signin button
    Then I see an error message

    Examples: 
      | email                | passw       |
      | maxwell174@gmail.com | password    |
      | maxwdgsd@gmail.com   | password123 |
      |                      | password123 |
      | maxwell174@gmail.com |             |
      |                      |             |
