
/*
  this case is a simple example of how to create an interface in typescript
  but you dosen't know the type of the object that you will receive: 
  example 👇
*/ 

let store: object;

store = {
  nome: "BK",
  address: "Rua X",
  status: true
}

// ----------------------------------------------------------------------------------------------------------------------------

/*
  We lets create an interface to define the type of the object that we will receive or a contract how called in typescript 

   example 👇
*/


interface StoreProps {
  name: string;
  address: string;
  status: boolean;
}

// Here IDE will show an error because the object that we are trying to assign to the variable store dosen't match with the interface

const burguerKing: StoreProps = {
  name: "BK",
  address: "Rua X",
  status: true
}

console.log(burguerKing); // { name: 'BK', address: 'Rua X', status: true }
