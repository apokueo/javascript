function discern() {
    console.log( this.a ) 
}

var obj = {
    a: 2, 
    discern: discern 
}; 

obj.discern(); 