function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}




function askUser(){
    var a = parseInt(prompt("Enter first number"));
    var operator = prompt("Enter operator + - / or *");
    var b = parseInt(prompt("Enter second number"));

    if (operator === "+") { 
        result = add(a, b);
    }
    else if (operator === "-"){
        result = substract(a, b);
    }
    else if (operator === "*"){
        result = multiply(a, b);
    }
    else if (operator === "/"){
        result = divide(a, b);
    }
    else{
        alert("Please enter a valid operator");
    }
    alert(result);
}
askUser();