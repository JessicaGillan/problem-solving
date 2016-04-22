var n = 600851475143;
var largestPrime = 0;
var prime = true;
for( i = 1; i < Math.sqrt(n); i++){
	if( n%i === 0){        //if its a divisor
		prime = true; 	   // Start with prime = true
		m = Math.sqrt(i)   //check if divisible by primes less than its square root to determine primality
		if( i%2 === 0 ){   //if divisible by 2 = not prime
			prime = false;
		}
		for( j=3; j<m; j+=2 ){ //if divisable by any odds < its square root = not prime
			if( i%j === 0){
				prime = false;
			}
		}
		if(prime){
			largestPrime = i;
		}
	}
}
console.log(largestPrime);