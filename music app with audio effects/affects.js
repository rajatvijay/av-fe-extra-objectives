var delay;
var chorus;
var wahwah;
var overdrive;
var tremolo;

function tunaDemo() {
    //create an instance of Tuna by passing the AudioContext we use
    var tuna = new Tuna(context);
    //create a new Tuna delay instance


    wahwah = new tuna.WahWah({
        automode: true, //true/false
        baseFrequency: 0.8, //0 to 1
        excursionOctaves: 1, //1 to 6
        sweep: 0.6, //0 to 1
        resonance: 70, //1 to 100
        sensitivity: 0.5, //-1 to 1
        bypass: 1
    });



    delay = new tuna.Delay({
        feedback: 0.78,
        delayTime: 70, //this will create a short "slap back" delay
        wetLevel: 0.9,
        dryLevel: 1,
        cutoff: 5000,
        bypass: true
    });


    overdrive = new tuna.Overdrive({
        outputGain: 1, //0 to 1+
        drive: 0.7, //0 to 1
        curveAmount: 1, //0 to 1
        algorithmIndex: 4, //0 to 5, selects one of our drive algorithms
        bypass: 1
    });


     tremolo = new tuna.Tremolo({
      intensity: 1,    //0 to 1
      rate: 8,         //0.001 to 8
      stereoPhase:140,    //0 to 180
      bypass: 1
  });




}




var context = new AudioContext;
tunaDemo();
var song = document.querySelector("audio");
var source = context.createMediaElementSource(song);


source.connect(wahwah.input);
source.connect(tremolo.input);
source.connect(overdrive.input);
source.connect(delay.input);
wahwah.connect(context.destination);
delay.connect(context.destination);
overdrive.connect(context.destination);
tremolo.connect(context.destination);




var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var d = document.querySelector(".d");

var x = 0;
var y = 0;
a.addEventListener("click", function(e) {
$(this).toggleClass("border");

    if (delay.bypass) {



        delay.bypass = false;
        console.log("false")

    } else {
        delay.bypass = true;
        console.log("true");


    }

});

b.addEventListener("click", function(e) {
$(this).toggleClass("border");

    if (wahwah.bypass) {

        wahwah.bypass = 0;



    } else {
        wahwah.bypass = 1;

    }


});


c.addEventListener("click", function(e) {
$(this).toggleClass("border");
    if (overdrive.bypass) {

        overdrive.bypass = 0;



    } else {
        overdrive.bypass = 1;

    }


});



d.addEventListener("click", function(e) {
$(this).toggleClass("border");
    if (tremolo.bypass) {

        tremolo.bypass = 0;
console.log("a")


    } else {
        tremolo.bypass = 1;

    }


});
