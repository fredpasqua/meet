# meet
The Meet App is part of the CareerFoundry Full Stack Developer Program:
The App will allow the user to search for events by city and store event info offline. It is to be a serverless, progressive web application (PWA) built with React using a Test-Driven Development technique. It will rely on Googles Calendar API to fetch events by city and use OAuth2 authentication flow. 
The App will use serverless functions (AWS lambda) for the authorization server instead of relying on a traditonal server...fancy!
The App will work on the latest versions of Chrome, Firefox, Safari, Edge and Opera as well as on IE11.
The App will be optimized for displays with widths of 1920px and 320px.
The App will pass Lighthouse's PWA checklist
The App must work offline or in slow network conditions with the help of a service worker.
Users will be able to install the App on a desktop or mobile home screen.
API calls will use React axios and async/await.
The App will implement an alert system using an OOP approach to show information to the user. 
The App will be covered by tests with a coverage rate >= 90%
The App will be monitored using an online monitoring tool. 
The App will contain graphs to quickly allow the user to make determinations on how many events are happening in a city and the popularity of event genres in the form of a pie chart. 

Key Features:
● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city

This page is dedicated to practicing writing user stories and the Gherkin Syntax for describing the features of the app and its benefits to the user. 


    Feature 2: Show/hide an event's details

        Scenario 1: An event element is collapsed by default
        Scenario 2: User can expand an event to see its details
        Scenario 3: User can collapse an event to hide its details
        
        USER STORY: 
        As a user I should be able to press a button to show an expanded view of the details
        of an event and collapse the view so I can save screen space and check out another event. 
        
        Gherkin Syntax:
        Given an event has been selected and is in its collapsed state
        When user presses a button to expand the event
        Then the user should see an expanded view of the event with greater details and be able to recollapse the event.

    Feature 3: Specify number of events

        Scenario 1: When user hasn’t specified a number, 32 is the default number
        Scenario 2: User can change the number of events they want to see
        
    USER STORY:
       As a user
         I should be able to “specify a number of events to view”
         So that I can see as many events as I would like displayed
    
    Gherkin Syntax:
        Given a user is logged in and the default number of events displays as 32
        When the user changes the number of events to display
        Then the user should see an updated number of events  


    Feature 4: Use the app when offline

        Scenario 1: Show cached data when there’s no internet connection
        Scenario 2: Show error when user changes the settings (city, time range)
        
    USER STORY:
      As a user
        I should be able to “see cached data when I don't have an internet connection”
        So that I can view event info when not online.  I should also get a notification of an error
        when changing settings like the city or time range to remind me that that feature is only available
        when I am online. 
       
    Gherkin Syntax:
       Given that the user is not online
       When the user opens the app 
       Then the user should be able to see a list of cached events
   

    Feature 5: Data visualization

        Scenario 1: Show a chart with the number of upcoming events in each city
        
     USER STORY:
         As a user
         I should be able to “view a chart showing the number of upcoming events in each city”
         So that I can see which cities have the most events taking place that would be of interest to me. 
         
     Gherkin Syntax:
        Given a user has logged in
        When the user chooses to view a chart of events by city
        The the user will see a chart of events listed by city

