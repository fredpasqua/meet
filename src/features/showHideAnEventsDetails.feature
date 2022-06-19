Feature: Show/hide an event's details

Scenario: User can expand an event to see its details
Given an event has been selected and is in its collapsed state
When user presses a button to expand the event
Then the user should see an expanded view of the event with greater details 
And be able to recollapse the event.
        
      
        
  
       