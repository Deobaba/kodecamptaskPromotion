KODECAMP promotional task 


Build a simple event logger application that allows users to log events and view a list of logged events. This project will help you practice event handling in Node.js

 

FEATURES

1. Event logging: Users can log events by providing a title and description, the date and time of the event being logged should be handled automatically. Hint:  use Date.
Write a function that takes in an event title, description, and emit an event with its title, description, and timestamp. Before emitting an event, it should add it to the list of total events.
The list of total events should be an array.
 

2. Event listener: Listen to events and display an event immediately it is logged.

 

3. Display list of events: display the total list of logged events in this format:

 

| event index. | event title | event timestamp| 

 

Use any method of your choice, either importing and creating an instance of an EventEmitter object or extending the EventEmitter object and inheriting its properties and methods.

Note: If you are extending the EventEmitter object, the list of events will be a private variable initialized to an empty array.