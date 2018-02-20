
array = [1,2,3,4,5] 
var uniqueProducts = array.filter(function(elem, i, array) { 
        return console.log(array.indexOf(elem) === i); 
    } 
); 
