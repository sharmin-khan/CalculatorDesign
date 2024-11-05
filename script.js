
var displayData = document.getElementById('display');
function inputNumber(Number) {
    var displayValue = displayData.value
    var storeData = displayValue + Number;
    document.getElementById('display').value = storeData;
}
function equal(){
    var express = document.getElementById('display').value;
    var counted = eval(express);
    document.getElementById('display').value = counted;
}
function allClear(){
    displayData.value = " ";  
}
function del() {
    display.value = display.value.slice(0,-1);
}


