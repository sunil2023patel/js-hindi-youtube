'use strict '
const user = {
  name: 'Alice',
  // Normal function: 'this' points to user object
  greetNormal: function() { console.log(this.name); }, 
  // Arrow function: 'this' falls back to global/window scope
  greetArrow: () => { console.log(this); } 
};

user.greetNormal(); // Logs: "Alice"
user.greetArrow();  // Logs: undefined