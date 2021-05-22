import { LLama } from './llamaworks.js';

    var btn = new LLama.Button;
    const label = 'tacos'
    btn.move(80,40);
    btn.label(label, 20, 'Cooper');

    btn.onclick(function(e){
        console.log(e);
        console.log('button clicked');
    });


    var checkbox = new LLama.CheckBox;
    checkbox.move(80, 200);
    checkbox.label('toast', 12, 'cooper');


    var radio = new LLama.RadioButton();
    radio.move(85, 250);
    radio.label('toast', 12, 'cooper');
    //

    var textBox = new LLama.TextBox();
    textBox.move(40, 150)
    var progressBar = new LLama.ProgressBar(275);
    progressBar.move(30, 10)
    var scrollBar = new LLama.ScrollBar(275);













