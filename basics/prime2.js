function prime(n){
    for(i=2;i<n;i++){
        if (n%i==0) {
            return "not prime";
        }
           
        }
        return "prime";
    }

var result1=prime(27);
var result2=prime(29);
console.log(result1);
console.log(result2);