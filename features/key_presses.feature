Feature: key presses page functionality

    Scenario Outline: As a user, I can see which button were pressed
  
    Given I am on the key_presses page
    When I can press <button>
    Then I can see <message>

    Examples:
      | button  | message         |
      | dasdasd | You entered: D  |
      | 11112   | You entered: 2  |
      | test    | You entered: T  |

