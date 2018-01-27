for (let temp, i=0, j=1; j < 30; temp = i, i = j, j = i + temp) 
    console.log(j);
    

let s = 3; 
for (; s.length < 10; s = ' ' + s); 

for (let x=0.2; x < 3.0; x += 0.2)
    console.log(x); 

// for (; !player.isBroke;) {
//     console.log("Still playing!")
// }
let totalBet = 0
switch(totalBet) {
    case 7:
        totalBet = funds; 
        break; 
    case 11:
        totalBet = 0;
        break; 
    case 13:
        totalBet = 0; 
        break; 
    case 21: 
        totalBet = 21; 
        break; 
    default:
        console.log("No superstition here!");   
        break; 

}


function adjustBet(totalBet, funds) {
    switch(totalBet) {
        case 7:
            return funds; 
        case 13: 
            return 0; 
        default:
            return totalBet; 
    }
}