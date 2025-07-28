function somar(num1, num2){
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input: Both inputs must be numbers.");
    }
    return num1 + num2; // Function to sum two numbers
}

function subtrair(num1, num2){
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input: Both inputs must be numbers.");
    }
    return num1 - num2; 
}


function multiplicar(num1, num2){
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input: Both inputs must be numbers.");
    }
    return num1 * num2; 
}

function dividir(num1, num2){
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input: Both inputs must be numbers.");
    }
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return num1 / num2; 
}






module.exports = { somar, subtrair, multiplicar, dividir }  // Exporting the Somar function for use in other files