# About

Meet App allows users to search for a city and get a list of events hosted in that city (or events in all cities). One chart shows how many events will take place in that city on upcoming days and another visualises the popularity of event genres in the form of a pie chart. It is a progressive web application built with React using test-driven development (TDD) technique. The app works offline and it can be installed on both mobile devices and computers. Serverless functions are used (AWS Lambda) for the authorisation server which generates authorisation token (OAuth 2 token) needed in order to access the Google Calendar API and get events data. Scatter chart and pie chart are implemented to visualise data using the recharts library.

# Tech Stack

Meet is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

# Features, User Stories & Test Scenarios

## Feature 1: Filter Events by City.

**User Story**

As a user, I would like to be able to filter events by city, so that I can see the list of events that take place in that city. 

**Test Scenarios**

1.1. When user hasn’t searched for a specific city, show upcoming events from all cities:

**Given** user hasn’t searched for any city;

**When** the user opens the app;

**Then** the user should see a list of upcoming events.

1.2. User should see a list of suggestions when they search for a city:

**Given** the main page is open;

**When** user starts typing in the city textbox;

**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

1.3. User can select a city from the suggested list:

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;

**When** the user selects a city (e.g., “Berlin, Germany”) from the list;

**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details. 

**User Story**

As a user, I would like to be able to show/hide event details, so that I can see more/less information about an event. 

**Test Scenarios**

2.1. Event details are hidden by default:

**Given** no city was selected yet;

**When** user has logged in the app and performed no actions;

**Then** all events will be collapsed by default.

2.2. User can expand an event to see its details:

**Given** user selected a city;

**When** user clicks on the specific event;

**Then** event details will be expanded.

2.3. User can collapse an event to hide its details:

**Given** user selected and clicked on event;

**When** user clicks on event details close button;

**Then** the event will collapse and hide the details.


## Feature 3: Specify Number of Events.  

**User Story**

As a user, I would like to be able to specify the number of events I want to view in the app, so that I can see more or fewer events in the events list at once. 

**Test Scenarios**

3.1. If user hasn’t specified a number, the default number of displayed events will be 25

**Given** the user did not specify a preferred number of events to be displayed;

**When** the user selects a city in which to view events;

**Then** default number displayed will be 25.

3.2. User can change the number of events they want to see

**Given** the user does not want to view 25 events;

**When** the user prefers to adjust how many events are displayed;

**Then** user will be able to set the number of events to be displayed.


## Feature 4: Use the App When Offline.

**User Story**

As a user, I would like to be able to use the app when offline, so that I can see the events I viewed the last time I was online.

**Test Scenarios**

4.1. Show cached data when offline:

**Given** user lost internet connection;

**When** user opens the app;

**Then** cached data within the app will still be accessible.

4.2. Show error when user changes their settings (city, time range):

**Given** user changed their settings in the app;

**When** user next opens the app or returns from the settings screen;

**Then** an error will display informing user that changes have been made.


## Feature 5: Display Charts Visualising Event Details.

**User Story**

As a user, I would like to be able to see a chart showing the upcoming events in each city, so that I know what events are organised in which city.

**Test Scenarios**

5.1. Show a chart with the number of upcoming events in each city:

**Given** user did not select a city;

**When** user wants to compare events between different cities;

**Then** user will be able to access a chart with the number of upcoming events in each city.

## Use of Serverless

The Meet App will use a serverless function to handle the logic on the backend for filtering events by city. When the user searches for a city, the frontend can trigger the serverless function with the search query. The function can then retrieve the list of events from the API, filter them based on the city, and return the filtered results to the frontend.

Similarly, a serverless function will also be used to handle the logic of fetching and filtering the events based on the preferred number. The frontend can trigger the function with the desired number of events, and the function can retrieve the appropriate number of events from the database or API and return them to the frontend.

The app will use serverless functions to visualise data into charts. When the user requests the chart, the frontend can trigger a serverless function that fetches the necessary data from the API, performs any required calculations and returns the processed data to the frontend.
