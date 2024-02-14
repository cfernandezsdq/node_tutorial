const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id)=>{
    console.log(`The event response was triggered with the user: ${name} and the ID: ${id}!`);
});
customEmitter.on('response', ()=>{
    console.log(`Same event response was triggered!`);
});

customEmitter.emit('response', 'Juan', 34);