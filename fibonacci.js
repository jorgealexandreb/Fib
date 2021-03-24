function fibonacci(n) {    

    var fib=[];
    
    if (n===1) {
        fib[0] = 0;
    }
    else if (n > 1) {
        fib[0] = 0;
        fib[1] = 1;    
    }
        for (var i=2; i<n; i++) {
            //fib generator;
            fib[i] = fib[i-2] + fib[i-1];  
    }
    return fib;
}