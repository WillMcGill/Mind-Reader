
var stateArray = ["start", "pick", "add", "sub", "reveal", "end"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", ")("];
var counter = 0;

var largeText = document.getElementById('largeText');
var smallText = document.getElementById('smallText');
var circleButton = document.getElementById('circleButton');

var randomNum = Math.floor(Math.random() * 10);

console.log (randomNum);

function checkRandom (){                            // check is random number is 9, generate new #
    if (randomNum == 9){
        randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        checkRandom();
}}

checkRandom();

function isZero(){
    if (randomNum == 0){
        randomNum = 8;
        return randomNum;
    }
    else {randomNum = randomNum - 1;
        return randomNum;
    };
}


var randomNumDis = randomNum;


console.log("random number is " + randomNum);

var n = randomNum;

function printSymbols(n = randomNum){
    
    for (var i = 1; i < 100; i++){                      // set function to run 99 times
        console.log(n);
        
        if (n < 8 && n >= 0){                           // increment random number
            console.log(i + ' = ' + symbolArray[n]);
            var newLine = document.createElement("div");
            var resultnode = document.createTextNode(i + ' = ' + symbolArray[n]);
            newLine.appendChild(resultnode);
            document.getElementById("largeText").appendChild(newLine);
            ++n;        
        }
        else if (n = 8){                                // reset random number to 0, cannot be higher than 8
            console.log(i + ' = ' + symbolArray[n]);
            var newLine = document.createElement("div");
            var resultnode = document.createTextNode(i + ' = ' + symbolArray[n]);
            newLine.appendChild(resultnode);
            document.getElementById("largeText").appendChild(newLine);
            var n = 0;          
        }      
        }
    }
  
    
// Render states
function render(){

    switch(stateArray[counter]){
        case "start":
            largeText.innerHTML = 'I can read your mind';
            var squareButton = document.getElementById('squareButton');
            squareButton.style.display = "none";
            circleButton.innerHTML = 'Start';
            break;

        case "pick":
            console.log('pick');
            largeText.innerHTML = 'Pick a number between 1 and 99';
            var squareButton = document.getElementById('squareButton');
            squareButton.style.display = "block";
            squareButton.innerHTML = 'Next';
            smallText.style.display = 'block';
            smallText.innerHTML = 'When you have your number click next';
            circleButton.innerHTML = 'Back';
            break;

        case "add":
            console.log('add');
            largeText.innerHTML = 'Add both digits to get a new number';
            var squareButton = document.getElementById('squareButton');
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Ex: 14 is 1 + 4 = 5  click next to proceed';
            circleButton.innerHTML = 'Back';
            break;

        case "sub":
            console.log('sub');
            largeText.innerHTML = 'Subtract new number from the original number';
            var squareButton = document.getElementById('squareButton');
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Ex: 14 - 5 = 9  click next to proceed';
            circleButton.innerHTML = 'Back';
            break;

        case "reveal":
            console.log('reveal');
            largeText.style.display = "none";
            largeText.style.display = "block";
            document.getElementById.resultnode.innerHTML = printSymbols();
            var squareButton = document.getElementById('squareButton');
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Find your new number.  Note the symbol beside the number';
            circleButton.innerHTML = 'Back';
            break;

        case "end":
            console.log(randomNum - 1);
            largeText.innerHTML = 'Your symbol is:   ' + symbolArray[isZero()];
            var squareButton = document.getElementById('squareButton');
            squareButton.style.display = "none";
            smallText.style.display = 'none';
            circleButton.innerHTML = 'Reset';
            break;
    }
}
// First render on page load

render();

// Button Functions - +/- counter

circleButton.addEventListener('click', function(){
        if (counter == 0){
            counter++;
            render();
            }
        else if (counter > 0 && counter < 5)
        {
            counter--;
            render();
            }
        else {
            counter = 0;
            render();
            }
        });

squareButton.addEventListener('click', function(){
            counter++;
            render();
        })