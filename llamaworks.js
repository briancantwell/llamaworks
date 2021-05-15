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


    var CheckBox = function(text = 'radio', qty= 1) {

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
    var RadioButton = function(text = 'checkbox', qty= 1) {

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
    var TextBox = function() {


    }
    var ScrollBar = function() {


    }
    var ProgressBar = function() {


    }

    return {Button, CheckBox, RadioButton, TextBox, ScrollBar, ProgressBar }
}());

export{LLama}
