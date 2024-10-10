@ForgotPassword
Feature: To validate the forgot password functionality

  Background: 
    Given user launch the facebook application
    And user click forgotten password link

  Scenario Outline: To validate searching forgotten account using mobile number
    When user enter serach mobile number "<mobile>"
    And user click search button
    Then user sees the search results based on mobile

    Examples: 
      | mobile |
      |    123 |

  Scenario Outline: To validate searching forgotten accout using mail id
    When user enter search mail id "<mailid>"
    And user click search button
    Then user sees the search results based on mailid

    Examples: 
      | mailid |
      | axjb   |
