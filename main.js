
var stateArray = ["start", "pick", "add", "sub", "reveal", "end"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", ")("];
var counter = 0;

var largeText = document.getElementById('largeText');
var squareButton = document.getElementById('squareButton');
var smallText = document.getElementById('smallText');
var circleButton = document.getElementById('circleButton');


console.log();

function increaseCount(){
    counter++;
    console.log(counter);
}

function decreaseCount(){
    counter--;
    console.log(counter);
}

function render(){
    console.log('render function');

    switch(stateArray[counter]){
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
            break;

        case "sub":
            console.log('sub');
            largeText.innerHTML = 'Subtract new number from the original number';
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Ex: 14 - 5 = 9  click next to proceed';
            circleButton.innerHTML = 'Back';
            break;

        case "reveal":
            console.log('reveal');
            largeText.innerHTML = symbolArray[Math.floor(Math.random() * 10)];
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Find your new number.  Note the symbol beside the number';
            circleButton.innerHTML = 'Back';
            break;

        case "end":
            console.log('end');
            largeText.innerHTML = symbolArray;
            squareButton.innerHTML = 'Next';
            smallText.style.display = 'none';
            circleButton.innerHTML = 'Reset';
            break;
    }
}


render();

circleButton.addEventListener('click', function(){
        if (counter == 0){
            counter++;
            render();
            }
        else if (counter > 0 && counter < 5)
        {
            counter++;
            render();
            }
        else {
            counter = 0;
            render();
            }
        });





console.log(Math.floor(Math.random() * 10));
