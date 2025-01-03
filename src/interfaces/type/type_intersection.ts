
type Info = {
  id: string
  name: string;
}


const productInfo: Info = { 
  id: '1',
  name: 'Notebook'
}

console.log(productInfo); // { id: '1', name: 'Notebook' }

type Category = {
  slug: string;
  quantty: number;
}


const category: Category = {
  slug: 'eletronics',
  quantty: 10
}

console.log(category); // { slug: 'eletronics', quantty: 10 }


/**
 * we can use the intersection type to combine the two types into one, 
 * so that the new type will have all the properties of the two types.
 * 👇
 */

type ProductInfo = Info & Category; // intersection type

const product: ProductInfo = {
  id: '1',
  name: 'Notebook',
  slug: 'eletronics',
  quantty: 10
}

console.log(product); // { id: '1', name: 'Notebook', slug: 'eletronics', quantty: 10 }
