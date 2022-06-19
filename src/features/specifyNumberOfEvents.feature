Feature: Specify number of events

Scenario: User can change the number of events they want to see
Given a user is logged in and the default number of events displays as 32
When the user changes the number of events to display
Then the user should see an updated number of events  
 
    
