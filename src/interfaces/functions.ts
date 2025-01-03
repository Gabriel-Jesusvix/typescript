
interface CourseProps {
  id: string;
  name: string;
  price: number;
  discount: (price: number) => void
}

function showDiscount(price: number):void {
  console.log(`Discount ${price}`);
}

showDiscount(50)

const newCourse: CourseProps = {
  id: "1",
  name: "React",
  price: 100,
  discount: showDiscount
}

console.log(newCourse.discount(newCourse.price)); // Discount 100
