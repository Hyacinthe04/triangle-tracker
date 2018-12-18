function seeTriangle() {
  var sideA = parseInt(document.getElementById("sideA").value);
  var sideB = parseInt(document.getElementById("sideB").value);
  var sideC = parseInt(document.getElementById("sideC").value);
  var trackerArray=[sideA,sideB,sideC];
  trackerArray;
   if((trackerArray[0]+trackerArray[1])> trackerArray[2] && (trackerArray[0]+trackerArray[2])>trackerArray[1] && (trackerArray[1]+sideC)>trackerArray[0]) {
     alert("triangle");
  if(trackerArray[0]===trackerArray[1] && trackerArray[1]===trackerArray[2] && trackerArray[1]===trackerArray[2]){
    alert("Triangle is Equilateral ");
    }
   else if(trackerArray[0]===trackerArray[1] || trackerArray[0]===trackerArray[2] || trackerArray[2]===trackerArray[1]){
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
    
    
    
    
    