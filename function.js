//pass function in default value
function sum(a, b) {
    return a + b;
}

let add = function(c, y = c * sum(3,7)){
    console.log(y);
    return c + y;
}

let result = add(20)
console.log(result);