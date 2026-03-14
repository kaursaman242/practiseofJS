// use a loop and funtion to find the factorial of a number.
function factorial(n){
    let result=1
    for (let i = 1; i <=n; i++) {
        result= result*i;  
    }
    console.log(result)
}

factorial(7)