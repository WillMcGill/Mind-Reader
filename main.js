
var stateArray = ["start", "pick", "add", "sub", "reveal", "end"];
var counter = 0;

var largeText = document.getElementById('largeText');
var squareButton = document.getElementById('squareButton');
var smallText = document.getElementById('smallText');
var circleButton = document.getElementById('circleButton');


function render(){
    console.log('render function');

    switch(stateArray[2]){
        case "start":
            console.log('start');
            largeText.innerHTML = 'I can read your mind';
            squareButton.style.display = "none";
            smallText.style.display = "none";
            circleButton.innerHTML = 'Start';
            break;

        case "pick":
            console.log('pick');
            largeText.innerHTML = 'Pick a number between 1 and 99';
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'When you have your number click next';
            circleButton.innerHTML = 'Back';
            break;

        case "add":
            console.log('add');
            largeText.innerHTML = 'Add both digits to get a new number';
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Ex: 14 is 1 + 4 = 5  click next to proceed';
            circleButton.innerHTML = 'Back';

    }

        

}

render();
