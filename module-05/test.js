// const printMyName = function (position) {
//   console.log(`${position} ${this.name}`);
// };

// const cat = {
//   name: "Lyola",
// };

// cat.hello = printMyName;

// // console.log(Object.keys(cat));

// // cat.hello();

// const cat2 = {
//   name: "Ramzes",
// };

// const catsArray = [cat, cat2, { name: "Kuzya" }];

// const cat3 = catsArray[2];

// const array = [
//   "Sparkling water",
//   "Onion",
//   "Strawberry",
//   "Strawberry",
//   "Strawberry",
// ];

// const showPositions = function (cats, positions) {
//   if (cats.length !== positions.length) {
//     console.log("length is not the same");
//     return;
//   }
//   for (let i = 0; i < cats.length; i += 1) {
//     const catFor = cats[i];
//     const positionFor = positions[i];
//     printMyName.call(catFor, positionFor);
//   }
// };

// const patchThisForCats = function (cats, fn) {
//   const patchCatfunction = [];
//   for (const cat of cats) {
//     const fnResult = fn.bind(cat);
//     console.log(fnResult); //чому в консоли відображається без имені кет
//     patchCatfunction.push(fnResult);
//   }
//   return patchCatfunction;
// };

// const result = patchThisForCats(catsArray, printMyName); // чому не повертає масив
// //const catsArray = [cat, cat2, { name: "Kuzya" }];
// //const printMyName = function (position) {
// // console.log(`${position} ${this.name}`);
// //};

// result[0]("pisa"); // що означає цей напис?
// // showPositions(catsArray, array);

// // cat.hello("krasynya");
// // cat.hello("kusuka");

// // printMyName.call(cat3);

// // printMyName();
// // printMyName.call(cat2);

// // for (const catItem of catsArray) {
// //   printMyName.call(catItem);
// // }

// // printMyName.call(cat3, "batya");

// const objB = {
//   z: 10,
// };

// const objA = Object.create(objB);

// const objA = {};

// console.log(objA);

// objA.x = 1;
// objA.y = 2;

// console.log(objA.z);

// console.log(objA.hasOwnProperty("x")); //почему 'x'?

// const employee = {
//   baseSalary: 30000,
//   overTime: 10,
//   rate: 20,
//   getWager() {
//     const result = this.baseSalary + this.overTime + this.rate;
//     return console.log(result);
//   },
// };

// employee.getWager();

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
//   //   this.sell = function () {
//   //     this.sales += 1;
//   //   }; - плохой вариант. Почему?
// };

// Manager.prototype.sell = function () {
//   this.sales += 1;
//}; // замена плохого варианта, почему?

// console.dir(Manager);

// const mango = new Manager("Mango", 5);

// console.log(mango);
// mango.sell();
// console.log(mango);
// console.log(mango.__proto__ === Manager.prototype); // true - почему?

// const poly = new Manager("Poly", 10);

// console.log(poly);
// // console.log(poly.hasOwnProperty("y")); // Почему здесь false?

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };

// poly.changeName("Ajax");
// console.log(poly);

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };

// const mango = new Manager("Mango", 5);

// console.log(mango);

// document.querySelector(".js-add-method").addEventListener("click", function () {
//   Manager.prototype.newMethod = function () {
//     console.log(this);
//     console.log("Hello");
//   };
//   console.log(mango.newMethod());
// });

// const objA = {
//     q:5,
//     z:6,
// };

// const objB = Object.create(objA);

// objB.x = 1;
// objB.y = 2;

// console.log(objB.hasOwnProperty("z"));

const Hero = function (name, xp) {
  (this.name = name), (this.xp = xp);
};

Hero.prototype.changename = function (name) {
  this.name = name;
};
const mango = new Hero("Mango", 1000);

console.log(mango);
