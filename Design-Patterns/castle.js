var Castle = function(name)  {
    this.name = name; 
} 

Castle.prototype.build = function() {
    console.log(this.name); 
} 

var instance1 = new Castle("Winterfell"); 

instance1.build(); 
