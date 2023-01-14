function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator=="+") {
        return add(num1, num2);
    }
    else if(operator=="-") {
        return subtract(num1, num2);
    }
    else if(operator=="*") {
        return multiply(num1, num2);
    }
    else if(operator=="÷") {
        return divide(num1, num2);
    }
}

let num = document.querySelectorAll(".num");
let output = document.querySelector("#outputNum");
let operatorType = "none";
let num2 = "none";
let num1= "none"
let result ="none";

num.forEach((number) => {
    number.addEventListener("click", () => {
        if(output.textContent=="0") {
            output.textContent=number.textContent;
            num1= Number(number.textContent);
        }
        else if(output.textContent.length <14 ) {
            output.textContent=output.textContent.concat(number.textContent);
            if(operatorType=="none") {
                num1 = Number(output.textContent);
            }
            else {
                if(num2=="none") {
                    num2=Number(number.textContent);
                }
                else {
                    num2 = Number(num2.toString().concat(number.textContent));
                }
            }
        }
    })
})

let operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if(operatorType=="none" && num1!="none") {
            output.textContent=output.textContent.concat(operator.textContent);
            operatorType=operator.textContent;
        }
        else if(num2=="none" && num1!="none") {
            output.textContent=output.textContent.slice(0,-1);
            output.textContent=output.textContent.concat(operator.textContent);
            operatorType=operator.textContent;
        }
        else if(num2!="none" && num1!="none") {
            output.textContent=output.textContent.concat(operator.textContent);
            result = operate(operatorType,num1,num2);
            num1 = result;
            num2="none";
            operatorType=operator.textContent;
        }
    })
})

let equal=document.querySelector(".equal");

equal.addEventListener("click", ()=> {
    if((num1!="none") && (num2!="none") && (operatorType!="none")) {
        result = operate(operatorType,num1,num2);
        if(result %1!=0){
            result = Number(result).toFixed(6);
        }
        num1 = result;
        num2="none";
        output.textContent=result.toString();
        operatorType="none";
    }
})

let clear = document.querySelector(".clear").addEventListener("click", ()=> {
    output.textContent="0";
    num1="none";
    num2="none";
    operatorType="none";
    result="none";
})