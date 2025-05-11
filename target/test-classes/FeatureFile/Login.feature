@Login
Feature: To validate the login functionlity

  Background: 
    Given user launch the facebook application

  @smoke
  Scenario Outline: To validate login using different credential sets
    When user enter "<username>" and "<password>"
    And user click login button
    Then user sees the results based on "<credentialType>"

    Examples: 
      | username             | password | credentialType |
      | ijk                  | ijk@123  | negative       |
      | mno                  | mngt@123 | negative       |
      | r15ranjith@gmail.com | Ram9992@ | positive       |

  @regression
  Scenario: To validate login using different credential sets
    When user enter username and password
      | username             | password |
      | mno                  | mngt@123 |
      | ijk                  | ijk@123  |
      | lmn                  | ijk@12   |
      | r15ranjith@gmail.com | Ram9992@ |
    And user click login button
    Then user sees the error message for invalid login attempt
