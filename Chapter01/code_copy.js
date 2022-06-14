
/*const fib = (n) =>{
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}; */

/*const foo = (n) => {
    if (n <= 1) return;
    foo(n - 1);
}; */

const bar = (n) =>{
    if (n <= 1) return 1;
    bar(n - 2);
};

//console.log(fib(6)+" fib 6");
//console.log(foo(6)+" foo 6");
console.log(bar(6)+" bar 6");
