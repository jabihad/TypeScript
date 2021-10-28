let obj = [
    {
        id: 1,
        name: "Kamal"
    },
    {
        id: 2,
        name: "Jamal"
    },
    {
        id: 3,
        name: "Shafiq"
    },
]

let res = obj.map(x => x.id);                         // Using map we can take only id or whatever property we want

console.log(res);                                     // [1, 2, 3]


let even = obj.map(x => x.id).filter(x => x%2 == 0);  // Applying filter we can get desired data

console.log(even);                                    // [2, 4]


let exist = obj.map(x => x.id).filter(x => x%2 == 0).includes(2);  
                                                     // Applying includes we can check if specific data exists

console.log(exist);                                  // true
