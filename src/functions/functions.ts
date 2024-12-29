
function login(username)/* Parameter 'username' implicitly has an 'any' type.  */ {

  console.log('Logging in as ' + username);
}
                              //👇 type void return of the funcion.
function login(username: string): void {

  console.log('Logging in as ' + username);
}


login() // Expected 1 arguments, but got 0.

login("admin@admin.com")

let n1: number = 10;
let n2: number = 10;

function sum(value1: number, value2: number): number {
  const total = value1 + value2;
  return total;
}

sum(n1, n2); // 20
let n3: number = 10;
let n4: string = "10";

function sum2(value1: number, value2: number): number {
  const total = value1 + value2;
  return total;
}

sum2(n3, n4); // error: Argument of type 'string' is not assignable to parameter of type 'number'.

/*
  ----------------------------------------------

  Arrows Functions 👇
*/


const fetchApi = (url: string): string => {

  return url;
}

fetchApi(); // Expected 1 arguments, but got 0, this case any string.
fetchApi("https://api.com");



