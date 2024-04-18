/* No.1 Given an array of objects, each object representing a person with a name and age property, 
write a function that returns a new array containing the names of all people who are 18 years old or older*/

function sortObjectsByAge (people){
  return people.filter(person => person.age >= 18).map(person => person.name)
}
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
console.log(sortObjectsByAge(people))

/* No.2 Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. 
The function should return an object that groups the products by their categories, 
with the category names as keys and the arrays of products as values */

function groupProducts(products){
  let finalProducts = {};

 products.forEach(product => {
  let category = product.category;
  if (finalProducts[category]) {
    finalProducts[category].push(product);
  } else {
    finalProducts[category] = [product];
  }
})

return finalProducts
}

const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];

console.log(groupProducts(products))

/* No.3 Given an array of objects, where each object represents a student with a name and an array of scores,
 write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85 */

 function getAverageScore(students){
  return students.filter(student => {
     const aveScore = student.scores.reduce((sum, score) => sum + score, ) / student.scores.length;
     return aveScore >= 85;
  }).map(student => student.name);
 }

 const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
console.log(getAverageScore(students))

/* NO.4 Given an object representing a car, with properties for the make, model, year, and a method to display the car's information,
 write a function that takes the car object and adds a new method to the object called age.
 The age method should return the current age of the car based on the current year and the car's year property.*/

 function addNewMethod(car){
  let currentYear = new Date().getFullYear()
  car.age = (currentYear - car.year) 
  return car
 }

 const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

console.log(addNewMethod(car))
car.displayInfo()
