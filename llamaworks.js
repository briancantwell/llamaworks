// File name: llamaworks.js

import {SVG} from './svg.min.js';

/**
 *
 * @type {{Button: (function(*=): {move: function(*=, *=): void, onclick: function(*): void, label: function(*=, *=, *=): void}), CheckBox: (function(*=, *=): {move: function(*=, *=): void, label: function(*=, *=, *=): void}), RadioButton: (function(*=, *=): {move: function(*=, *=): void, label: function(*=, *=, *=): void}), TextBox: TextBox, ProgressBar: (function(*=, *=, *=): {move: function(*=, *=): void, setProgress: function(*): void, getIncrement: function(): number, getProgress: function(): number}), ScrollBar: (function(*=, *=): {move: function(*=, *=): void, position: function(): *})}}
 */
var LLama = (function() {
    var draw = SVG().addTo('body').size('500', '500');

    var config = {
        // default color scheme
        bg: '#1c1c1c',
        primary: '#73948e',  // medium
        secondary: '#191f1e',// dark
        tertiary: '#ffffff', // bright
        inactive: '#8a8a8a',
        active: '#3d3d3d',

    }
    /**
     * Creates a button
     * @param string
     * @returns {{move: move, onclick: onclick, label: label}}
     * @constructor
     */
    var Button = function(string = 'button'){

        var group = draw.nested()
        var clickEvent = null


        // Begin states
        // Up: Initial state
        // create nested group to contain the shape and text
        var shape = group.circle(100).fill(config.primary)
        // group.add(shape);
        //text
        var label = group.text(string).fill(config.secondary);
        label.x(shape.rx())
        label.y(shape.ry() - label.y()*2)
        // Hover State
        group.mouseover(function(){
            shape.fill(config.inactive)
            label.fill({ color: config.secondary  })

        })
        group.mouseout(function(){
            shape.fill({ color: config.primary })
            this.fill({ color: config.inactive  })
        })

        // Down State
        group.mousedown(function(){
            shape.fill({ color: config.tertiary})
            this.fill({ color: config.primary  })

        })
        group.mouseup(function(){
            shape.fill({ color: config.primary})
            this.fill({ color: config.inactive  })
        })
        // on mouseup while Down && Hover
        group.click(function(event){
            if(clickEvent != null)
                clickEvent(event)
        })


        // end States
        // begin defining public functions
        return {
            move: function(x, y) {
                group.move(x, y)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            label: function(string, size = 10, family = 'Helvetica'){
            label.text(string)
            label.font({anchor: 'middle', size: size, family: family});
        }
        // end public functions
        }
    }


    /**
     *
     * @param text
     * @param qty
     * @returns {{move: move, label: label}}
     * @constructor
     */
    var CheckBox = function(text = 'checkbox', qty= 1) {
        /*TODO:
            - implement creation of checkbox groups
         */
        /* create the group
        * - sets the overflow attribute to visible to
        *  prevent element cutoff
        */
        // create nested group to contain the shape and text
        var group = draw.nested().attr({'overflow': 'visible'});
        /* create group elements
        * box
        * checkMark
        * label
        * */
        var box = group.rect({
            width:20,
            height:20,
            fill: config.primary,
            radius: 5,
        }).stroke({ color: config.secondary, opacity: 0.6, width: 5 })


        var checkMark = group.circle({
            r: (box.width()/4),
            fill: config.secondary,
            cx: box.cx(),
            cy: box.cy()
        }).hide()

        //text
        var label = group.text(text).fill(config.secondary);
        // text position

        label.x(box.width() * 1.5).y(box.cy() - label.y());

        // Begin states
        // Unchecked: Initial state
        var checked = false

        var clickEvent = (function(e){
            console.log(e);
            // State: checked
            if(checked){
                checked = false
                console.log('un-checked');
                checkMark.hide()

            }
            // State: unchecked
            else{
                checked = true
                console.log('checked');
                checkMark.show()
            }
        });


        //
        group.click(function(event){
            if(clickEvent != null)
                clickEvent(event)

        })


        // end States
        // begin defining public functions
        return {
            move: function(x, y) {
                group.move(x, y)
            },
            label: function(string, size = 10, family = 'Helvetica'){
                label.text(string)
                label.font({size: size, family: family});
            }
            // end public functions
        }

    }
    /**
     *
     * @param text
     * @param qty
     * @returns {{move: move, label: label}}
     * @constructor
     */
    var RadioButton = function(text = 'checkbox', qty= 1) {
        /*TODO:
            - implement creation of radio button groups
            - target functionality: only one radio button in the group can be checked
         */
        /* create the group
        * - sets the overflow attribute to visible to
        *  prevent element cutoff
        */
        // create nested group to contain the shape and text
        var group = draw.nested().attr({'overflow': 'visible'});
        /* create group elements
        * box
        * checkMark
        * label
        * */
        var box = group.circle({
            r: 10,
            fill: config.primary,
            radius: 5,
        }).stroke({ color: config.secondary, opacity: 0.6, width: 5 })


        var checkMark = group.circle({
            r: (box.width()/4),
            fill: config.secondary,
            cx: box.cx(),
            cy: box.cy()
        }).hide()

        //text
        var label = group.text(text).fill(config.secondary);
        // text position

        label.x(box.width() * 1.5).y(box.cy() - label.y());

        // Begin states
        // Unchecked: Initial state
        var checked = false
        var clickEvent = (function(e){
            console.log(e);
            // State: checked
            if(checked){
                // checked = false
                // console.log('un-checked');
                // checkMark.hide()

            }
            // State: unchecked
            else{
                checked = true
                console.log('checked');
                checkMark.show()
            }
        });


        //
        group.click(function(event){
            if(clickEvent != null)
                clickEvent(event)

        })


        // end States
        // begin defining public functions
        return {
            move: function(x, y) {
                group.move(x, y)
            },
            label: function(string, size = 10, family = 'Helvetica'){
                label.text(string)
                label.font({size: size, family: family});
            }
            // end public functions
        }


    }

    /**
     *
     * @param width
     * @param height
     * @constructor
     */
    var TextBox = function(width = 100, height = 150) {
        /*TODO: CURRENTLY NOT FUNCTIONAL*/
        // var group = draw.nested();

        // var backgroundBar = group.rect(width,height).fill(config.primary).radius(5);
        // var text = group.text("I NEED TACOS!").fill(config.primary)
        // var caret = text.line(10)


        var textBox = draw.rect(width, height)//foreignObject(width, height)
        // group.add(foreignObject)
        var text = draw.text('input').build(true)



        // group.click(function(){
        //    textBox.focus()
        // });

        // return {
        //     move: function (x, y) {
        //         foreignObject.move(x, y)
        //     },
        //     onclick: function (eventHandler) {
        //         clickEvent = eventHandler
        //     },
        //     text: function(){
        //
        //     }
        //
        // }
    }

    /**
     *
     * @param height
     * @param width
     * @returns {{move: move, position: (function(): *)}}
     * @constructor
     */
    var ScrollBar = function(height = 200, width = 15) {
        var mouseY = null
        var group = draw.nested();
        var indicatorSize = 25;
        var backgroundBar = group.rect(width,height).fill(config.secondary).radius(5);
        var indicator = group.rect(width, indicatorSize).fill(config.primary).radius(5);
        var hold = false
        var position = indicator.y()
        var bounds = [backgroundBar.y(), backgroundBar.height()-indicatorSize]



        document.addEventListener('mousemove', (event) => {
            mouseY = event.clientY
        });
        group.mouseup(function(){
            hold = false;

        });
        group.mouseout(function(){
            hold = false;

        });
        group.mousemove(function (){
               if(hold) {
                   if((mouseY - (indicatorSize / 1.5) >= bounds[1])){
                       indicator.y(bounds[1])
                   }
                   else if((mouseY - (indicatorSize / 1.5) <= bounds[0])){
                       indicator.y(bounds[0])
                   }else {
                       indicator.y((mouseY - (indicatorSize / 1.5)));
                   }
               }
        });
        group.mousedown(function(){
            hold = true;
        })
        group.click(function(){
            indicator.animate(100).y((mouseY - (indicatorSize / 1.5)));
            if((mouseY - (indicatorSize / 1.5) >= bounds[1])){
                indicator.animate(100).y(bounds[1])
            }
            else if((mouseY - (indicatorSize / 1.5) <= bounds[0])){
                indicator.animate(100).y(bounds[0])
            }
        });

        return {
            move: function (x, y) {
                foreignObject.move(x, y)
            },
            position: function(){
                return position
            }
        }
    }

    /**
     *
     * @param width
     * @param height
     * @param increment
     * @returns {{move: move, setProgress: setProgress, getIncrement: (function(): number), getProgress: (function(): number)}}
     * @constructor
     */
    var ProgressBar = function(width = 100, height = 15, increment = width/100) {
        var currentProgress = 0;
        var group = draw.nested();
        var backgroundBar = group.rect(width,height).fill(config.secondary);
        var progressBar = group.rect(currentProgress, height).fill(config.primary);


        return {
            move: function (x, y) {
                foreignObject.move(x, y)
            },
            getIncrement: function(){
              return increment;
            },
            setProgress: function(num){
                  if(num <= 100 || num >= 0) {
                      currentProgress = num;
                      progressBar.animate().width(currentProgress * increment);
                  }
            },
            getProgress: function() {
                return currentProgress
            }
        }
    }

    return {Button, CheckBox, RadioButton, TextBox, ScrollBar, ProgressBar }
}());

export{LLama}
