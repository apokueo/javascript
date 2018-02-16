function evocation(this) {
    console.log(this.gucci) 
} 


let aethyr = { 
    firstrealm: evocation, 
    spirit: function() { 
        console.log("King Paiymon") 
    }, 
    spirit2: function() { 
        console.log("King Bael is lord master of aerth") 
    } 
}

let aethyr2 = { 
    firstrealm2: evocation, 
    gucci: function() { 
        console.log("King Paiymon") 
    }, 
    gucci2: function() { 
        console.log("King Bael is lord master of aerth") 
    } 
}

let spiritObj = aethyr2.gucci

spiritObj.bind(evocation)

//spiritObj.bind(evocation) 

spiritObj(aethyr); 
