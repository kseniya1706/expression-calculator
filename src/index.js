function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let arrayFromExpr = [];
    let workArray = [];
    let workArray2 = [];
    let resultArray = [];
    let arrayWhithoutSpace = [];
    let openBracket = 0;
    let closeBracket = 0;
    let result = 0;

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

    if (openBracket != closeBracket) {
        throw 'ExpressionError: Brackets must be paired';
    }

    for (let i = 0; i < arrayFromExpr.length; i++) {
        if (arrayFromExpr[i] == '\/' && arrayFromExpr[i + 1] == '0'){
            throw 'TypeError: Division by zero.';
        }
        
    }

    // 
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
                    workArray.push(arrayFromExpr[i] + arrayFromExpr[i+1] + arrayFromExpr[i+2]);
                    i += 2;
                } else {
                    workArray.push(arrayFromExpr[i] + arrayFromExpr[i+1]);
                    i++;
                }  
        }
        else {
            workArray.push(arrayFromExpr[i]);
        }
    }
    
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
    
    workArray2 = deleteSpace(workArray);

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

    for (let i = 0; i < workArray2.length; i++) {
        if (workArray2[i] != '\ ' || workArray2[i] == '0') {
            resultArray.push(workArray2[i]);
        }
    }
    
    result = resultArray[0];

    function deleteSpace(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != '\ ' || arr[i] == '0') {
                arrayWhithoutSpace.push(arr[i]);
            }
        }
        return arrayWhithoutSpace;
    }

    return result;
}

module.exports = {
    expressionCalculator
}