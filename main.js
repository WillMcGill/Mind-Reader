
var stateArray = ["start", "pick", "add", "sub", "reveal", "end"];
var counter = 0;

function render(){
    console.log('render function');

    switch(stateArray[counter]){
        case "start":
            console.log('start');

    }

}

render();
