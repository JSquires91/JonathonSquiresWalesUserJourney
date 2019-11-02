Feature: Checking Wales NHS Support
  Check what support a person from Wales can get from the NHS

  Scenario: Person from Wales checks for help
    Given I am a person from Wales
    When I put my circumstances into the Checker tool
    Then I should get a result of whether I will get help or not