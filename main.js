
var stateArray = ["start", "pick", "add", "sub", "reveal", "end"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", ")("];
var counter = 0;

var largeText = document.getElementById('largeText');
var smallText = document.getElementById('smallText');
var circleButton = document.getElementById('circleButton');

var randomNum = Math.floor(Math.random() * 10)


console.log("random number is " + randomNum);


function printSymbols(n = randomNum){
    
    for (var i = 1; i < 100; i++){
        console.log(n);
        
        if (n < 8 && n >= 0){
            console.log(i + ' = ' + symbolArray[n]);
            ++n;        
        }
        else if (n = 8){
            console.log(i + ' = ' + symbolArray[n]);
            var n = 0;          
        }
        //largeText.innerHTML = i + ' = ' + symbolArray[n];
        
        var newLine = document.createElement("div");
        var resultnode = document.createTextNode(i + ' = ' + symbolArray[n]);
        newLine.appendChild(resultnode);
        document.getElementById("largeText").appendChild(newLine);
        }
    }



/*function nineLoop(){
        for (var n = randomNum; 1 <= 10; n++){
            console.log(n + 'loop start');
            if (n < 10){
                console.log (n + 'is less than 10')
            }

            else (n = 1);
        }
    }*/
    

function render(){
 //   console.log('render function');

    switch(stateArray[counter]){
        case "start":
 //           console.log(counter);
            largeText.innerHTML = 'I can read your mind';
            var squareButton = document.getElementById('squareButton');
            squareButton.style.display = "none";
            //smallText.style.display = "none";
            circleButton.innerHTML = 'Start';
            break;

        case "pick":
            console.log('pick');
            largeText.innerHTML = 'Pick a number between 1 and 99';
            var squareButton = document.getElementById('squareButton');
            squareButton.style.display = "block";
            squareButton.innerHTML = 'Next';
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
            document.getElementById.largeText.innerHTML = printSymbols();
            var squareButton = document.getElementById('squareButton');
            squareButton.innerHTML = 'Next';
            smallText.innerHTML = 'Find your new number.  Note the symbol beside the number';
            circleButton.innerHTML = 'Back';
            break;

        case "end":
            console.log('end');
            largeText.innerHTML = symbolArray[randomNum - (9 - randomNum)];
            var squareButton = document.getElementById('squareButton');
            squareButton.style.display = "none";
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
                
