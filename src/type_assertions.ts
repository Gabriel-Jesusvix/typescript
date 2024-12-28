
/**
 type assertion is afirmation of the type of a variable
*/

let status: unknown = 1;


let changeStatus: number = 0;

changeStatus = status // unknow type is not assignable to number type.
changeStatus = status as number // afirmation of the type of status variable this case is number type.

console.log(changeStatus);


