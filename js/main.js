//Global values, wichtig für Reihenfolge der Events!!
var globalticker = 0;


AFRAME.registerComponent('play-next-sound', {
    schema: {type: 'selector'},

    init: function () {
        var targetEl = this.data;  // Specified via schema.
        var soundEl = this.el;

        soundEl.addEventListener('sound-ended', function () {
            targetEl.components.sound.playSound();
        });
    }
});

AFRAME.registerComponent('sound-event-animate', {
    schema: {
        aevent: {default: 'soundanim1'},

        target: { parse:function(value){
              return document.getElementsByClassName(value);

        } },
        targetbyid: {type: 'selector'}
    },

    init: function () {

        var data = this.data;

        this.el.addEventListener('sound-ended', function () {
            for (var i=0; i<4; i++)
                data.target[i].emit(data.aevent);
        });

        this.el.addEventListener('sound-ended', function () {
                data.targetbyid.emit(data.aevent);
        });
    }
});



AFRAME.registerComponent('event-animate', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        aevent: {default: 'animation1'},
        triggeraction: {default: 'click' }
    },

    init: function() {

        var data= this.data;

        this.el.addEventListener(data.triggeraction, function () {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
        });
    }
});




