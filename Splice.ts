let arr = ["orange", "mango", "banana", "sugar", "tea"];  

let removed = arr.splice(2, 0, "water", "coffee");  
                                       // (start index, number of elements to be deleted, element to be added...)

console.log("After adding: " + arr );  // "After adding: orange,mango,water,coffee,banana,sugar,tea"

console.log("removed is: " + removed); // "removed is: "
          
removed = arr.splice(3, 1);  

console.log("After removing  " + arr );// "After removing  orange,mango,water,banana,sugar,tea" 

console.log("removed is: " + removed); // "removed is: coffee" 
