function check_getTriangles(){
  var sideA = parseFloat(prompt("please enter value of side A"));
  var sideB = parseFloat(prompt("please enter value of side B"));
  var sideC = parseFloat(prompt("please enter value of side C"));
  
  
  if(sideA===sideB && sideB===sideC && sideB===sideC){
  alert("thi is Equilateral triangle ");
  }
  else if(sideA===sideB || sideA===sideC || sideC===sideB){
  alert("this is Isosceles triangle");
  }
  else if((sideA+sideB)<= sideC || (sideA+sideC)<=sideB || (sideB+sideC)<=sideA) {
  alert(" those Values are not match any Triangle");
  }
  else{
  alert("this is Scalene triangle");
  }
  }
  
  
  