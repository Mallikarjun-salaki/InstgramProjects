
function turnOff(){
    var inputfield = document.getElementById("screen")
    inputfield.style.visibility ="hidden"
    var inputValues = document.getElementById("inputnumbers")
    inputValues.value =""  
}
function turnOn(){
    var inputfield = document.getElementById("screen")
    inputfield.style.visibility ="visible"  
}


var inputValues = document.getElementById("inputnumbers")

function getValues(num){
    inputValues.value += num
    console.log(inputValues.value)
}

function clearOneChar(){
    inputValues.value = inputValues.value.slice(0,-1)
}

function clearAll(){
    inputValues.value =""
}


function calculate(){
    inputValues.value = eval(inputValues.value)
}