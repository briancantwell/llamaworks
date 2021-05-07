import { LLama } from './llamaworks.js';

// Implement a MyToolkit Button
var btn = new LLama.Button;
btn.move(100,100);
btn.onclick(function(e){
    console.log(e);
    console.log('tacos');

});
