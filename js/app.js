// findSum function declaration
function findSum(){
	var i = 0;
	var args=0;	
	while(i<arguments.length){
	args+= arguments[i];	
	i++;
	};
console.log("Sum of",Array.prototype.join.call(arguments),"is",args); //console output of sum of entered values
}

// findSum function call 1
findSum(1,2,3);
// findSum function call 2
findSum(1,2,3,4,5,6,7,8,9,10);