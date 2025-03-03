Feature: Create posts

  Scenario: Create a new posts
    Given a new post with title "First one"
    And a user ID 1
    When the new post is created
    Then it has an ID
    And the title is "First one"
    And the user ID is 1
    And the post is created successfully
