/**
  rest params are used to get all the arguments passed to a function
 */


function totalSales(sale1: number, sale2: number, sale3: number ): number {
  const total = sale1 + sale2 + sale3;

  return total;
}

totalSales(10, 20, 30); 


/**
 * But, when don't know how many arguments will be passed to a function, we can use rest params
 */


function totalSales1(...sales: number[]): number {
  return sales.reduce((total, sale) => total + sale, 0);
}

totalSales1(10,30,50,60,10,990,9000,40000) // Can receive any number of arguments