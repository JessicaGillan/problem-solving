var n1 = 1;
var n2 = 2;
var sum = 0;
console.log(n1);
while( n2 < 4000000 ){
	console.log(n2);
	if( n2%2 === 0){
		sum += n2;
	}
	temp = n2;
	n2 = n1 + n2;
	n1 = temp;
}
console.log(sum);