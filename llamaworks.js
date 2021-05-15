// File name: llamaworks.js

import {SVG} from './svg.min.js';

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


    var CheckBox = function(text = 'checkbox') {
        // track if checked
        var checked = false
        /* create the group
        * - sets the overflow attribute to visible to
        *  prevent element cutoff
        */
        var group = draw.nested().attr({'overflow': 'visible'});
        // define the click event to animate the checkbox
        var clickEvent = (function(e){
            console.log(e);

            if(checked){
                checked = false
                console.log('un-checked');
                circle.animate().move(-7, 0)

            }
            else{
                checked = true
                console.log('checked');
                circle.animate().move(7, 0)
            }
        });
        group.move(20,30)
        // Begin states
        // Up: Initial state
        // create nested group to contain the shape and text
        var pill =  group.rect(45,25).fill(config.secondary)//.dx(-10).dy(-2.5)

        var circle = group.circle(20).fill(config.primary)

        //text
        var label = group.text(text).fill(config.secondary);
        // text position
        console.log(circle.cx())
        label.x(circle.cx() * 4.5);
        // label.x(shape.dx() + 10);
        label.y(circle.cy() - label.y());

        // Hover State
        circle.mouseover(function(){
            circle.fill({ color: config.secondary })
            this.fill({ color: config.active  })

        })
        circle.mouseout(function(){
            circle.fill({ color: config.primary })
            this.fill({ color: config.inactive  })
        })

        // Down State
        circle.mousedown(function(){
            circle.fill({ color: config.tertiary})
            this.fill({ color: config.primary  })

        })
        // group.mouseup(function(){
        //     shape.fill({ color: config.primary})
        //     this.fill({ color: config.inactive  })
        // })
        // // on mouseup while Down && Hover
        circle.click(function(event){
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
                label.font({size: size, family: family});
            }
            // end public functions
        }

    }
    var RadioButton = function() {


    }
    var TextBox = function() {


    }
    var ScrollBar = function() {


    }
    var ProgressBar = function() {


    }

    return {Button, CheckBox, RadioButton, TextBox, ScrollBar, ProgressBar }
}());

export{LLama}
