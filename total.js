function brickCalculator(floorNum){
    var total;
    if(floorNum <=10){
        floorBrickCount = 15 * 1000 ;
      }
         else if(floorNum >10 && floorNum <=20){
          floorBrickCount = 12 * 1000 ;
       }
          else{
              floorBrickCount = 10 * 1000 ;
          }
         total = floorNum * floorBrickCount;
        
    return total;

}

var brickresult = brickCalculator(10);

console.log(brickresult);




if(my_arr[i] === "")   
          return false;



