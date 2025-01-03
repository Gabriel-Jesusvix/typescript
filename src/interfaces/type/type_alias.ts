
function access(uuid: string | number|  null, name: string): void {
  console.log(`ID: ${uuid}- Bem vindo ${name}`);
}

console.log(access(1, 'Lucas')); // ID: 1- Bem vindo Lucas
console.log(access("34", 'Jorge')); // ID: 34- Bem vindo Jorge

// Refactor


type UUID = string | number | null;

function access1(uuid: UUID, name: string): void {
  console.log(`ID: ${uuid}- Bem vindo ${name}`);
}

console.log(access1(1, 'Lucas')); // ID: 1- Bem vindo Lucas