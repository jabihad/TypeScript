let listOfSelectRole: number[] = [];

listOfSelectRole.push(1, 2, 3, 1, 2 , 3);

console.log(listOfSelectRole);                              // 1 2 3 1 2 3

listOfSelectRole = _.uniqWith(listOfSelectRole, _.isEqual); // 1 2 3
                                                            // returns unique element
