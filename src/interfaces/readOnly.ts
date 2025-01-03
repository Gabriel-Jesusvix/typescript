/**
 * Read only 
 */


interface ProductProps {
  readonly id: string; // read only property not allowed to change
  name: string;
  description: string;
}

let product1: ProductProps = {
  id: '1',
  name: 'Laptop',
  description: 'Dell Laptop'
}

console.log(product1); // { name: 'Laptop', description: 'Dell Laptop' }

product1.id = '2'; // Cannot assign to 'id' because it is a read-only property.