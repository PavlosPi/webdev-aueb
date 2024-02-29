function add(a, b){
    let sum;
    sum = a + b;
    return sum;
}

//den xriazte result gt apla ektiponi
function showResults() {
    let a = 10;
    let b=20;
    let result = add( a , b);

    document.write(`${a} + ${b} = ${result}`);
}