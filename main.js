
var stateArray = ["start", "pick", "add", "sub", "reveal", "end"];
var counter = 0;

var largeText = document.getElementById('largeText');
var squareButton = document.getElementById('squareButton');
var smallText = document.getElementById('smallText');
var circleButton = document.getElementById('circleButton');


function render(){
    console.log('render function');

    switch(stateArray[1]){
        case "start":
            console.log('start');
            largeText.innerHTML = 'I can read your mind';
            squareButton.style.display = "none";
            smallText.style.display = "none";
            circleButton.innerHTML = 'Start';

        case "pick":
            console.log('pick');
            largeText.innerHTML = 'Pick a number between 1 and 99';
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Add both digits to get a new number';
            circleButton.innerHTML = 'Back';
    }

        

}

render();
