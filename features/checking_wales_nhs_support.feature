Feature: Checking Wales NHS Support
  As a person from Wales
  I need to know what help I can get with my NHS costs
  So that I can get the treatment I need

  Scenario: Person from Wales checks for help
    Given I am a person from Wales
    When I put my circumstances into the Checker tool
    Then I should get a result of whether I will get help or not