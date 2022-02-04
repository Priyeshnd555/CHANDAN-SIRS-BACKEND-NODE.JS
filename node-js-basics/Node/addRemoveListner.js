
// addListner , RemoveListenr, RemoveAllListener


const events = require("events");

const eventEmitter = new events.EventEmitter();


const add = (a,b)=>{
    console.log("add",a+b);
}

 // creating Event 
 //=========================================================================
eventEmitter.on('myEvent', add)
eventEmitter.on("myEvent1",add);
eventEmitter.on("myEvent2",add)


//============================================================================
console.log("Event names before remove",eventEmitter.eventNames());

eventEmitter.removeListener("myEvent",add) // we also need to pass the function
// this is beacuse if we have same events this will avoid ambiguity

console.log("Event Listener after remove",eventEmitter.eventNames());


//===================================================================

//removing all the listeners

eventEmitter.removeAllListeners();

console.log("Event names after removing all ",eventEmitter.eventNames());

///===========================================================