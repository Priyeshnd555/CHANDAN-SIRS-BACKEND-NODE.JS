const events = require("events");
// return class of event emitter
/* const Emitter = events.EventEmitter;
console.log(Emitter);  we ar
e printing the class returned to see the methods inside it 
very much helpful
*/
const eventEmitter = new events.EventEmitter();
// events.EventEmitter() returns a class and using new keyword we
// are creating object for it

console.log("program started");
//========================================================================================
// BELOW CODE IS CALLED PUBLISHING THE EVENT
// event emitter takes two parameters
// 1. event name
// 2 . callback function
// This is also Listening to eventy
eventEmitter.on("test", () => {
  console.log("test fired");
});
// Firing the event THE EVENT
eventEmitter.emit("test"); // this will execute but sum = NaN
eventEmitter.emit("test", 3, 35); // passing parameters to emit listner
// it takes only the first param

//=======================================================================================
// PASSING PARAMETERS
eventEmitter.on("test", (a, b) => {
  console.log("sum", a + b);
});
//Firing add
eventEmitter.emit("test", 4, 5);

// below code will execute
eventEmitter.emit("test");
//===================================================================
/* console.log("eventEmitter",eventEmitter); */ // for printing object
//=============================================================================
/// showing once method of event which will be executed only once
eventEmitter.once("myEvent", () => {
  console.log("once exeuted");
});

eventEmitter.emit("myEvent");// only this will get executed 
eventEmitter.emit("myEvent");
eventEmitter.emit("myEvent");

//=====================================================================================
// to get all the names of listsner
const names = eventEmitter.eventNames()
console.log("name fof listner ",names);
//========================================================================================
console.log("program ended");

/*
 program started and program ended is
  very much useful in finding out whether we
  have async operations in our code or not

  */
