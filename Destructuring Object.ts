let obj = {
    'name': 'Kamal',
    'id': '123',
    'session': '2014-15'
};

let obj_inside_obj = { obj, 'age': '56'};

let new_obj = { ...obj, 'age': '56'};  // destructuring object

console.log(obj_inside_obj);

/*
Will Show the following
{
  "obj": {
    "name": "Kamal",
    "id": "123",
    "session": "2014-15"
  },
  "age": "56"
}
*/

console.log(new_obj);

/*
Will Show the following
{
  "name": "Kamal",
  "id": "123",
  "session": "2014-15",
  "age": "56"
} 
*/
