Feature: Specify Number of Events
    Scenario: If user hasn’t specified a number, the default number of displayed events will be 32
        Given the user have just opened the app
        And the user Haven't changed the number of events
        When the user views the events list
        Then the Number Of Events input field should display 32 by default
        And the number of events in the list should be 32 by default

    Scenario: User can change the number of events they want to see
        Given the user have just opened the app
        When the user changes the value of Number Of Events input field
        Then the number of events in the list will change accordingly