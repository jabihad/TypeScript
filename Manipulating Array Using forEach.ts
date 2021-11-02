let arr = [
    {
    'id': 1,
    'age': 11
    },
    {
    'id': 2,
    'age': 12
    },
    {
    'id': 3,
    'age': 13
    }
];
arr.forEach( num => {num.id = num.id + 2});  // increasing id by 2

console.log(arr);

let originalArr = ["Iron", "Super", "Ant", "Aqua"];

originalArr.forEach((name, index) => originalArr[index] = `${name}man`);

console.log( "Overridden: %s", originalArr );
