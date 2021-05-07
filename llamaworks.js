// File name: llamaworks.js

import {SVG} from './svg.min.js';



var LLama = (function() {
    var draw = SVG().addTo('body').size('100%','100%');
    var Button = function(){




        // var rect = draw.rect(100,50).fill('red')

        // var polygon = draw.polygon('80,50 60,40 100,50 60,60 50,100 40,60 0,50 40,40')
        // var polygon = draw.polygon('-0.00173,26.88054l5.34762-16.61299l14.00018,-10.26752l17.30544,0l14.00027,10.26752l5.34754,16.61299l-5.34754,16.61299l-14.00027,10.26751l-17.30544,0l-14.00018,-10.26751l-5.34762,-16.61299')
        var polygon = draw.cricle({radius: 10})

        var clickEvent = null
        polygon.fill({ color: '#2d7a77' })
        polygon.mouseover(function(){
            this.fill({ color: '#44b3ae' })
        })
        polygon.mouseout(function(){
            this.fill({ color: '#2d7a77' })
        })
        polygon.mouseup(function(){
            this.fill({ color: '#2d7a77'})
        })
        polygon.click(function(event){
            this.fill({ color: '#78a2c2'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                polygon.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
    return {Button}

}());





export{LLama}
