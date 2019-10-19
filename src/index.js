function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let arrayFromExpr = [];
    let formatedArray =[];
    let workArray = [];
    let workArray2 = [];
    let resultArray = [];
    let arrayWhithoutSpace = [];
    let openBracket = 0;
    let closeBracket = 0;
    let result = 0;
    let startSubArray = 0;
    let finSubArray = 0;
    let subArray = [];
    let subArrayResult = 0;

//Delete spaces
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] != '\ ') {
            arrayFromExpr.push(expr[i]);
        }
        if (expr[i] == '(') {
            openBracket++;
        }
        if (expr[i] == ')') {
            closeBracket++;
        }
       
    } 

    for (let i = 0; i < arrayFromExpr.length; i++) {
        if (arrayFromExpr[i] == '\/' && arrayFromExpr[i + 1] == '0'){
            throw 'TypeError: Division by zero.';
        }
    }
    if (openBracket != closeBracket) {
        throw 'ExpressionError: Brackets must be paired';
    }


for (let i = 0; i < arrayFromExpr.length; i++) {
    if (arrayFromExpr[i]!='+' && arrayFromExpr[i+1]!='+' &&
            arrayFromExpr[i]!='-' && arrayFromExpr[i+1]!='-' &&
            arrayFromExpr[i]!='*' && arrayFromExpr[i+1]!='*' &&
            arrayFromExpr[i]!='\/' && arrayFromExpr[i+1]!='\/' &&
            arrayFromExpr[i]!='(' && arrayFromExpr[i+1]!='(' &&
            arrayFromExpr[i]!=')' && arrayFromExpr[i+1]!=')' && (i+1)!= arrayFromExpr.length)
        {
            if (arrayFromExpr[i+2]!='+'
                && arrayFromExpr[i+2]!='-'
                && arrayFromExpr[i+2]!='*'
                && arrayFromExpr[i+2]!='/'
                && arrayFromExpr[i+2]!='('
                && arrayFromExpr[i+2]!=')'
                && (i+2)!= arrayFromExpr.length){
                    formatedArray.push(arrayFromExpr[i] + arrayFromExpr[i+1] + arrayFromExpr[i+2]);
                    i += 2;
                } else {
                    formatedArray.push(arrayFromExpr[i] + arrayFromExpr[i+1]);
                    i++;
                }  
    }
    else {
        formatedArray.push(arrayFromExpr[i]);
    }
}

    for (let i = 0; i < formatedArray.length; i++) {
        if (formatedArray[i] == '(') {
            startSubArray = i;
            for (let j = i; j < formatedArray.length; j++){
                if (formatedArray[j] == ')') {
                    finSubArray = j;
                }
            }
        
        subArray = formatedArray.splice(startSubArray,  finSubArray-startSubArray+1, "\ ");
        subArray.pop();
        subArray.shift();
    
        subArrayResult = calculate(subArray);
    
        formatedArray[startSubArray]= subArrayResult;
        }
    }
    return calculate(formatedArray);

function calculate (workArray){  
    for (let i = 1; i < workArray.length-1; i++) {
        if (workArray[i] === '*') {
            workArray[i+1] = +(workArray[i-1]) * +(workArray[i+1]);
            workArray[i-1] = '\ ';
            workArray[i] = '\ ';
        }
        if (workArray[i] === '\/') {
            workArray[i+1] = +(workArray[i-1]) / +(workArray[i+1]);
            workArray[i-1] = '\ ';
            workArray[i] = '\ ';
        }  
        
    }
    
    workArray2.splice(0, workArray2.length);

    for (let i = 0; i <workArray.length; i++) {
        if (workArray[i] != '\ ' || workArray[i] == '0') {
            workArray2.push(workArray[i]);
        }
    }

    for (let i = 1; i < workArray2.length-1; i++) {
        if (workArray2[i] === '+') {
            workArray2[i+1] = +(workArray2[i-1])+ +(workArray2[i+1]);
            workArray2[i-1] = '\ ';
            workArray2[i] = '\ ';
        }
        if (workArray2[i] === '-') {
            workArray2[i+1] = +(workArray2[i-1]) - +(workArray2[i+1]);
            workArray2[i-1] = '\ ';
            workArray2[i] = '\ ';
        }    
    }
   
    resultArray.splice(0, resultArray.length);
    
    for (let i = 0; i < workArray2.length; i++) {
        if (workArray2[i] != '\ ' || workArray2[i] == '0') {
            resultArray.push(workArray2[i]);
        }
    }

    return resultArray[0];
}
}

module.exports = {
    expressionCalculator
}