function seeTriangle() {
  var sideA = parseInt(document.getElementById("sideA").value);
  var sideB = parseInt(document.getElementById("sideB").value);
  var sideC = parseInt(document.getElementById("sideC").value);
   if((sideA+sideB)> sideC && (sideA+sideC)>sideB && (sideB+sideC)>sideA) {
     alert("triangle");
  if(sideA===sideB && sideB===sideC && sideB===sideC){
    alert("Triangle is Equilateral ");
    }
   else if(sideA===sideB || sideA===sideC || sideC===sideB){
    alert("Triangle is Isosceles");
    }
    else{
      alert("Triangle is Scalene");
    }
    }
    else{
    alert("Values do not match a Triangle");
    }
    };
    
    
    
    
    