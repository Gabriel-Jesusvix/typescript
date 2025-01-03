

interface Technology {
  id: string;
  name: string;
  slug?: string[]; // Optional property
}

let tech: Technology = {
  id: '1',
  name: 'JavaScript',
  slug: ['js', 'es6'] // but property is defined how optional, but we have to provide value.
}

console.log(tech);  // { id: '1', name: 'JavaScript', slug: [ 'js', 'es6' ] }ww