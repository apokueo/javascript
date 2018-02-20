window.onload = function() {
    console.log("window is loaded.");
}

addOnLoad(function() {
    console.log("2 window is loaded.");
});

addOnLoad(function() {
    console.log("3 window is loaded.");
});

addOnLoad(function() {
    console.log("4 window is loaded.");
});

function addOnLoad(fun) {
    var last = window.onLoad;
    window.onload = function() {
        if(last) last();

        fun();
    }
}
