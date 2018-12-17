function seeTriangle() {
  var side1 = document.getElementById("Side1").value;
  var side2 = document.getElementById("Side2").value;
  var side3 = document.getElementById("Side3").value;


  if(side1===side2 && side2===side3 && side2===side3){
    alert("Triangle is Equilateral ");
    }
    else if(side1===side2 || side1===side3|| side3===side2){
    alert("Triangle is Isosceles");
    }
    else if(((side1+side2) > side3) || ((side1+side3) > side2) ||((side2+side3) > side1) && (firstSide!=secondSide) && (firstSide!=thirdSide) && (secondSide!=thirdSide)) {
    alert("scalene");
    }
    else if(((side1+side2) <= side3) ||((side1+side3)<=side2) ||((side2+side3) <=side1) ){
      alert("no triangle");
    }
    else{
      alert("invalid");
    }
  }
    
    
    