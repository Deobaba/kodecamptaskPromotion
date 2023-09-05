const EventEmitter = require('events');

class EventLogger extends EventEmitter {
  constructor() {
    super();
    this.events = [];
  }

  logEvent(title, description) {
    const timestamp = new Date();
    const event = { title, description, timestamp };
    this.events.push(event);
    this.emit('eventLogged', event);
  }

  displayEvents() {
    this.events.forEach((event, index) => {
      console.log(`| ${index + 1}. | ${event.title} | ${event.timestamp} |`);
    });
  }
}

const eventLogger = new EventLogger();

// Event listener
eventLogger.on('eventLogged', (event) => {
  console.log('Event logged:');
  console.log(event);
});

// Logging events
eventLogger.logEvent('Event 1', 'Description for Event 1');
eventLogger.logEvent('Event 2', 'Description for Event 2');

// Displaying all logged events
eventLogger.displayEvents();