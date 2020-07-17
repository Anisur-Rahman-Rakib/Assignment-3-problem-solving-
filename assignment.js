
// Q1.
// feetToMile ......Problem Solve


function feetToMile(feet) {
    let mile = feet / 5280;
	if (feet < (0)) {
		return 'length cannot be less than zero'; 
	} 
		return  mile;
}

//Program Run. For Output Test....


let result = feetToMile(1) + '  '  + 'Mile';
console.log(result);



// Q2.
// woodCalculator ...Problem Solve


function woodCalculator (chair, table, bed){
let chairCount = chair * 1 ;
let tableCount = table * 3 ;
let bedCount   = table * 5 ;
let totalFeet  = chairCount + tableCount + bedCount + ' ' + "Cubic Feet";
return totalFeet;
}

//Program Run. For Output Test....

let woodResult = woodCalculator (1, 1, 1);
console.log(woodResult);



// Q3.
// brickCalculator ....Problem Solve

function brickCalculator(floorNum){
    
    if(floorNum <=10){
        floorBrickCount = 15 * 1000 ;
      }
         else if(floorNum >10 && floorNum <=20){
          floorBrickCount = 12 * 1000 ;
       }
          else{
              floorBrickCount = 10 * 1000 ;
          }
         
          total = floorNum * floorBrickCount + '  ' +'Brick';
        
          return total;

}


//Program Run. For Output Test....


let brickresult = brickCalculator(21);

console.log(brickresult);





// Q4.
// tinyFriend  .......Problem Solve

function tniFriend(num){
    var smallStrinInArray = num[0];
    for(i = 0; i < num.length; i++){
        if (typeof num[i] ==='undefined'){
            return "distance cannot be negative"; 
        }
        
if(num[i].length < smallStrinInArray.length){
    smallStrinInArray = num[i];
}

    }
    return smallStrinInArray;
}

//Program Run. For Output Test....


var viewResult = tniFriend(['Anis' ,  'Mohammod' , 'Rakib' ,  'Anisur' , 'Rahman' , 'Rakib']);
console.log(viewResult);
