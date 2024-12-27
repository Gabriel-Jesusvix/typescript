

/*
  tupla é um array com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos. Por exemplo, você pode querer representar um valor como um par de uma string e um número:
*/

let customer: [string, number];

customer = ['John Doe', 25];
customer = ['John Doe', 25, "São Paulo"]; // Erro de compilação pois o número de elementos é diferente do definido

customer.push('G.J', 50)

console.log(customer)


let statusOrder: [string, string, string];

statusOrder = ["Production", "In Progress", "Done"];


console.log(statusOrder)