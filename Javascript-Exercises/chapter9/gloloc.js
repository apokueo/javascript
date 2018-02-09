// antipattern(s) 

myname = "global"; // global variable

function func() {
	console.log(myname) // -> undefined 
	var myname = "local"; 
	console.log(myname); 
} 

/** its reasonable to expect that the first { global myname } would be logged in the block, but its not because its considered local to the local function **/

func(); 
