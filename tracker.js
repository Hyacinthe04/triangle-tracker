function seeTriangle() {
  var side1 = document.getElementById("Side1").value;
  var side2 = document.getElementById("Side2").value;
  var side3 = document.getElementById("Side3").value;


if (thisIsNotTriangle(side1,side2,side3)) {
  if (side1 === side2 && side1 === side3) {
      alert("equilateral");
    }
    else if (side1 === side2 || side1 === side3|| side2 === side3){
      alert("isosceles");
    }
    else {
      alert("scalene");
    }
} 


else {
  alert("not a triangle");
}
  
}

function thisIsNotTriangle(side1,side2,side3) {
if ( (side1 + side2) <= side3 ) {
    return false;
}
else if ( (side1 + side3) <= side1 ) {
  return false;
}
else if ( (side1 + side3) <= side2 ) {
  return false;
}
else if (!(side1) || !(side2) || !(side3)){
  return false;
}
else {
  return true;
}
}
