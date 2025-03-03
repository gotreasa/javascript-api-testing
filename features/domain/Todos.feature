Feature: Retrieve todos

  Scenario Outline: A todo has a title - ID: <id>
    Given A todo with ID <id>
    When the record is retrieved
    Then the record has the title <title>

    Examples:
      | id | title                              |
      | 1  | delectus aut autem                 |
      | 2  | quis ut nam facilis et officia qui |

  Scenario Outline: A todo has a completed status - ID: <id>
    Given A todo with ID <id>
    When the record is retrieved
    Then the record has the completed status <completed>

    Examples:
      | id | completed |
      | 1  | false     |
      | 2  | false     |
      | 4  | true      |

  Scenario Outline: A todo has a matching ID - ID: <id>
    Given A todo with ID <id>
    When the record is retrieved
    Then the record has the ID <id>

    Examples:
      | id |
      | 1  |
      | 2  |
      | 4  |
