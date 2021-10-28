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

let res = obj.map(x => x.id); // Using map we can take only id or whatever property we want

console.log(res);             // [1, 2, 3]
