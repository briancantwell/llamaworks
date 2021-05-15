import { LLama } from './llamaworks.js';

    // Implement a MyToolkit Button
    var btn = new LLama.Button;
    const label = 'tacos'
    btn.move(80,80);
    btn.label(label, 20, 'Cooper');

    btn.onclick(function(e){
        console.log(e);
        console.log('button clicked');
    });


    var checkbox = new LLama.CheckBox;
    checkbox.move(80, 20);
    checkbox.label('toast', 12, 'cooper');

    checkbox.onclick(function(e){
        console.log(e);
        console.log('button clicked');
    });

    // var radio = new LLama.RadioButton();
    // radio.move(80, 20);
    // radio.label('toast', 12, 'cooper');
    //
