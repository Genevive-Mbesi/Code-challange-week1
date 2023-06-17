let carSpeed = prompt("Car Speed");
let speedLimit = 70;
const demeritPoints= (carSpeed-speedLimit)/5;

if(carSpeed< 70){
    console.log("Ok");
} 
else if (carSpeed>71 && carSpeed<131){
    console.log (demeritPoints);
} 
else {
    (carSpeed>131)
    console.log("License Suspended")}